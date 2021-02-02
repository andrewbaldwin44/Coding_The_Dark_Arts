import { database } from '../../../../auth/auth-service';

async function updateDatabase(path, doc, newData) {
  const reference = database.collection(path).doc(doc);
  return reference.update(newData);
}

export default async (req, res) => {
  const { slug } = req.query;
  const { comment, uid, timestamp, displayName } = req.body;

  try {
    await updateDatabase('comments', slug, {
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
