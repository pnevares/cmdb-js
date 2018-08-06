const mongoDb = require('../mongodb');
const names = require('./names');

module.exports = (req, res) => {
  const dbClient = mongoDb.client();
  const collection = dbClient.collection('contacts');

  const contacts = [];
  while(contacts.length < 10) {
    const contact = names();
    contacts.push(contact);
  }

  collection.insertMany(contacts, function() {
    res.send(`Inserted ${contacts.length} contacts`);
  });
};
