import { database } from '../../auth/auth-service';

async function queryDatabase(path, doc) {
  const reference = await database.collection(path).doc(doc).get();
  return reference.data();
}

export default async (req, res) => {
  const mahBeans = await queryDatabase('test', 'test');

  res.statusCode = 200;
  res.json(mahBeans);
};
