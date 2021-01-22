import { database } from '../../../../auth/auth-service';

async function deleteDatabase(path, doc, newData) {
  const reference = database.collection(path).doc(doc);
  return reference.delete(newData);
}

export default async (req, res) => {
  const { slug } = req.query;
  const { commentID, user, comment } = req.body;

  try {
    await deleteDatabase('comments', slug, {
      [commentID]: {
        user,
        comment,
      },
    });

    res.status(200);
    res.json({ status: 200 });
  } catch ({ message }) {
    res.status(400);
    res.json({ status: 400, message });
  }
};
