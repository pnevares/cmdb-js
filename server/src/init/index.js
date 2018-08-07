const mongoDb = require('../mongodb');
const names = require('./names');
const addresses = require('./addresses');
const phones = require('./phones');
const emails = require('./emails');

module.exports = (req, res) => {
  const dbClient = mongoDb.client();
  const collection = dbClient.collection('contacts');

  const contacts = [];
  while(contacts.length < 10) {
    const name = names();

    const contact = {
      ...name,
      addresses: addresses(),
      phones: phones(),
      emails: emails(name),
    };

    contacts.push(contact);
  }

  collection.insertMany(contacts, function() {
    res.send(`Inserted ${contacts.length} contacts`);
  });
};
