import { database } from '../../../auth/auth-service';

async function queryDatabase(path, doc) {
  const reference = await database.collection(path).doc(doc).get();
  return reference.data();
}

export default async (req, res) => {
  const blogComments = await queryDatabase('comments', 'test');

  const parsedComments = Object.entries(blogComments).map(([user, comment]) => {
    return {
      user,
      comment,
    };
  });

  res.statusCode = 200;
  res.json(parsedComments);
};
