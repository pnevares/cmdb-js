const mongoDb = require('../../../../mongodb');

module.exports = (req, res) => {
  const dbClient = mongoDb.client();
  const collection = dbClient.collection('contacts');

  // use the promise API for this
  collection
    .find()
    .toArray()
    .then(docs => res.json(docs));
};
