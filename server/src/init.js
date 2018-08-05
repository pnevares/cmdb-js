const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://cmdb_user:cmdb_password@cmdb-js-mongo:27017';

const dbName = 'cmdb';

module.exports = (req, res) => {
  let response = '';

  const insertDocuments = function(db, callback) {
    const collection = db.collection('contacts');

    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      response += 'Inserted 3 documents into the collection';
      callback(result);
    });
  }

  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    response += 'Connected successfully to server';
  
    const db = client.db(dbName);
  
    insertDocuments(db, function() {
      res.send(response);
      client.close();
    });
  });
};