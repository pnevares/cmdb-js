const mongoDb = require('../../../../mongodb');
const ObjectId = require('mongodb').ObjectId;

module.exports = (req, res) => {
  const dbClient = mongoDb.client();
  const collection = dbClient.collection('contacts');

  // use the promise API for this
  collection
    .find(ObjectId(req.params.id))
    .toArray()
    .then(docs => res.json(docs));
};
