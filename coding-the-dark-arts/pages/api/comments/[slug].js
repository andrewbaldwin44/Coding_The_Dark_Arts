import { database } from '../../../auth/auth-service';

async function queryDatabase(path, doc) {
  const reference = await database.collection(path).doc(doc).get();
  return reference.data();
}

export default async (req, res) => {
  const { slug } = req.query;

  try {
    const blogComments = await queryDatabase('comments', slug);

    const parsedComments = Object.entries(blogComments).map(([user, comment]) => {
      return {
        user,
        comment,
      };
    });

    res.statusCode = 200;
    res.json({ status: 404, comments: parsedComments });
  } catch ({ message }) {
    res.status = 404;
    res.json({ status: 404, message });
  }
};
