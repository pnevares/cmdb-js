const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://cmdb_user:cmdb_password@cmdb-js-mongo:27017';

const dbName = 'cmdb';

module.exports = (req, res) => {
  let response = '';

  const insertDocuments = function(db, callback) {
    const collection = db.collection('contacts');

    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      response += 'Inserted 3 documents into the collection';
      callback(result);
    });
  }

  MongoClient.connect(url, function(err, client) {
    response += 'Connected successfully to server';
  
    const db = client.db(dbName);
  
    insertDocuments(db, function() {
      res.send(response);
      client.close();
    });
  });
};