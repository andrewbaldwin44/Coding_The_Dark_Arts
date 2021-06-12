import { database } from '../../../auth/auth-service';

async function queryDatabase(path, doc) {
  const reference = await database.collection(path).doc(doc).get();
  return reference.data();
}

export default async (req, res) => {
  const { slug } = req.query;

  try {
    const comments = await queryDatabase('comments', slug);

    const parsedComments = Object.entries(comments)
      .sort(([timestampA], [timestampB]) => Date.parse(timestampB) - Date.parse(timestampA))
      .map(([index, comment]) => ({
        timestamp: index,
        ...comment,
      }));

    res.status(200);
    res.json({ status: 200, comments: parsedComments });
  } catch ({ message }) {
    res.status(200);
    res.json({ status: 200, comments: [] });
  }
};
