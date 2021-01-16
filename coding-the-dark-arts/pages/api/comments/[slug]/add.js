import { database } from '../../../../auth/auth-service';

async function writeDatabase(path, doc, newData) {
  const reference = database.collection(path).doc(doc);
  return reference.update(newData);
}

export default async (req, res) => {
  const { slug } = req.query;
  const { comment, user } = req.body;

  try {
    await writeDatabase('comments', slug, {
      [String(new Date())]: {
        user,
        comment,
      },
    });

    res.status(200);
    res.json({ status: 200, comment: { user, comment } });
  } catch ({ message }) {}
};
