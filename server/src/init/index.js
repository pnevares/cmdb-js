const addresses = require('./addresses');
const emails = require('./emails');
const mongoDb = require('../mongodb');
const names = require('./names');
const phones = require('./phones');

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
      deleted: false,
      created: Date.now(),
    };

    contacts.push(contact);
  }

  collection.insertMany(contacts, function() {
    res.send(`Inserted ${contacts.length} contacts`);
  });
};
