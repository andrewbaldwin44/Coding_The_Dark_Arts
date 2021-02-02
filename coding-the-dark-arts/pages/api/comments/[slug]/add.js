import { database } from '../../../../auth/auth-service';

async function writeDatabase(path, doc, newData) {
  const reference = database.collection(path).doc(doc);
  return reference.update(newData);
}

export default async (req, res) => {
  const { slug } = req.query;
  const { comment, uid } = req.body;
  const timestamp = String(new Date());

  try {
    await writeDatabase('comments', slug, {
      [timestamp]: {
        comment,
        uid,
      },
    });

    res.status(200);
    res.json({ status: 200, comment: { comment, uid, timestamp } });
  } catch ({ message }) {
    res.status(400);
    res.json({ status: 400, message });
  }
};
