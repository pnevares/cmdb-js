const mongoDb = require('./mongodb');

module.exports = (req, res) => {
  const dbClient = mongoDb.client();

  const insertDocuments = function(db, callback) {
    const collection = db.collection('contacts');

    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      callback('Inserted 3 documents into the collection');
    });
  }

  insertDocuments(dbClient, function(result) {
    res.send(result);
  });
};
