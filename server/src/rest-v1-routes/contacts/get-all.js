const mongoDb = require('../../mongodb');

module.exports = (req, res) => {
  const dbClient = mongoDb.client();

  const collection = dbClient.collection('contacts');

  collection.find().toArray((err, docs) => {
    res.json(docs);
  });
};
