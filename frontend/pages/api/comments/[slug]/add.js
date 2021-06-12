import { database } from '../../../../auth/auth-service';

async function writeDatabase(path, doc, newData) {
  const reference = database.collection(path).doc(doc);
  const snapshot = await reference.get();

  if (snapshot.exists) {
    return reference.update(newData);
  }

  return reference.set(newData);
}

export default async (req, res) => {
  const { slug } = req.query;
  const { comment, uid, displayName } = req.body;
  console.log(displayName);
  const timestamp = String(new Date());

  try {
    await writeDatabase('comments', slug, {
      [timestamp]: {
        comment,
        uid,
        displayName,
      },
    });

    res.status(200);
    res.json({ status: 200, comment: { comment, uid, timestamp, displayName } });
  } catch ({ message }) {
    res.status(400);
    res.json({ status: 400, message });
  }
};
