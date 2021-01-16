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
      .sort(([indexA], [indexB]) => Date.parse(indexB) - Date.parse(indexA))
      .map(([index, comment]) => comment);

    res.statusCode = 200;
    res.json({ status: 200, comments: parsedComments });
  } catch ({ message }) {
    res.status = 404;
    res.json({ status: 404, message });
  }
};
