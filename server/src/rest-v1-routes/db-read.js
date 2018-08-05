const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://cmdb_user:cmdb_password@cmdb-js-mongo:27017';

const dbName = 'cmdb';

module.exports = (req, res) => {
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('contacts');

    collection.find({}).toArray((err, docs) => {
      res.send(docs);
      client.close();
    });
  });
};