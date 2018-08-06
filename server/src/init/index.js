const mongoDb = require('../mongodb');
const names = require('./names');
const addresses = require('./addresses');
const phones = require('./phones');

module.exports = (req, res) => {
  const dbClient = mongoDb.client();
  const collection = dbClient.collection('contacts');

  const contacts = [];
  while(contacts.length < 10) {
    const contact = {
      ...names(),
      addresses: addresses(),
      phones: phones(),
    };

    contacts.push(contact);
  }

  collection.insertMany(contacts, function() {
    res.send(`Inserted ${contacts.length} contacts`);
  });
};
