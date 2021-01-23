import { database, FieldValue } from '../../../../auth/auth-service';

async function deleteDatabase(path, doc, commentID) {
  const reference = database.collection(path).doc(doc);
  return reference.update({ [commentID]: FieldValue.delete() });
}

export default async (req, res) => {
  const { slug } = req.query;
  const { commentID } = req.body;

  try {
    await deleteDatabase('comments', slug, commentID);

    res.status(200);
    res.json({ status: 200 });
  } catch ({ message }) {
    res.status(400);
    res.json({ status: 400, message });
  }
};
