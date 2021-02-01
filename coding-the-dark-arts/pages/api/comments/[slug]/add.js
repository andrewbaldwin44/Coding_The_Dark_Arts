import { database } from '../../../../auth/auth-service';

async function writeDatabase(path, doc, newData) {
  const reference = database.collection(path).doc(doc);
  return reference.update(newData);
}

export default async (req, res) => {
  const { slug } = req.query;
  const { comment, uid, user } = req.body;
  const timestamp = String(new Date());

  try {
    await writeDatabase('comments', slug, {
      [uid]: {
        comment,
        timestamp,
        user,
      },
    });

    res.status(200);
    res.json({ status: 200, comment: { comment, user } });
  } catch ({ message }) {
    res.status(400);
    res.json({ status: 400, message });
  }
};
