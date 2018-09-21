const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://cmdb_user:cmdb_password@cmdb-js-mongo:27017';
const dbName = 'cmdb';

let _client;

module.exports = {
  connect: () => {
    MongoClient.connect(url, function(err, client) {
      if(err) {
        console.log(err);
        return;
      }
      _client = client.db(dbName);
    });
  },
  client: () => _client,
  close: () => _client.close(),
}
