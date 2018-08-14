const addresses = require('./addresses');
const companyNames = require('./companies');
const dates = require('./dates');
const emails = require('./emails');
const jobTitles = require('./job-titles');
const mongoDb = require('../../mongodb');
const names = require('./names');
const phones = require('./phones');

module.exports = (req, res) => {
  const dbClient = mongoDb.client();

  const contactsCollection = dbClient.collection('contacts');
  const contacts = [];
  while(contacts.length < req.params.count) {
    const name = names();
    const contact = {
      ...name,
      ...dates(),
      jobTitle: jobTitles(),
      addresses: addresses(),
      phones: phones(),
      emails: emails(name),
      deleted: false,
      created: Date.now(),
    };

    contacts.push(contact);
  }
  
  const companiesCollection = dbClient.collection('companies');
  const companies = [];
  while(companies.length < req.params.count) {
    const company = {
      name: companyNames(),
      created: Date.now(),
    };

    companies.push(company);
  }

  contactsCollection
    .insertMany(contacts)
    .then(() => companiesCollection.insertMany(companies))
    .then(() => res.send('Inserted contacts and companies'));
};
