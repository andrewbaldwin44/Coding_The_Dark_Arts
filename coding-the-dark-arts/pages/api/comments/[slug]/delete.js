import { database, FieldValue } from '../../../../auth/auth-service';

async function deleteDatabase(path, doc, identifier) {
  const reference = database.collection(path).doc(doc);
  return reference.update({ [identifier]: FieldValue.delete() });
}

export default async (req, res) => {
  const { slug } = req.query;
  const { timestamp } = req.body;

  try {
    await deleteDatabase('comments', slug, timestamp);

    res.status(200);
    res.json({ status: 200, comment: { slug, timestamp } });
  } catch ({ message }) {
    res.status(400);
    res.json({ status: 400, message });
  }
};
