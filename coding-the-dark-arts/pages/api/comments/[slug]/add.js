import { database } from '../../../../auth/auth-service';

async function writeDatabase(path, doc, newData) {
  const reference = database.collection(path).doc(doc);
  return reference.update(newData);
}

export default async (req, res) => {
  const { slug } = req.query;
  const { comment, user, uid } = req.body;
  const commentID = String(new Date());

  try {
    await writeDatabase('comments', slug, {
      [commentID]: {
        user,
        comment,
        uid,
      },
    });

    res.status(200);
    res.json({ status: 200, comment: { user, comment, id: commentID }, uid });
  } catch ({ message }) {
    res.status(400);
    res.json({ status: 400, message });
  }
};
