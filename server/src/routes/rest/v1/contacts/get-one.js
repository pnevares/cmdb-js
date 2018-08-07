const mongoDb = require('../../../../mongodb');
const ObjectId = require('mongodb').ObjectId;

module.exports = (req, res) => {
  const dbClient = mongoDb.client();

  const collection = dbClient.collection('contacts');

  collection.find(ObjectId(req.params.id)).toArray((err, docs) => {
    res.json(docs);
  });
};
