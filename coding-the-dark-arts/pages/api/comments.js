async function updateDatabase(path, doc, newData, database) {
  const reference = database.collection(path).doc(doc);
  return reference.update(newData);
}
