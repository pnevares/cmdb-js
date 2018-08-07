const random = require('./random');

const domains = ['aol.com', 'msn.com', 'gmail.com', 'yahoo.com', 'hotmail.com', 'live.com', 'outlook.com', 'att.net'];
const labels = ['Work', 'Personal'];

module.exports = (name) => {
  let emailCount = Math.ceil(Math.random() * 3);
  const emails = [];

  while(emailCount > 0) {
    const username = `${name.firstName.toLowerCase()}.${name.lastName.toLowerCase()}`;
    emails.push({
      primary: emailCount === 1,
      label: random(labels),
      emailAddress: `${username}@${random(domains)}`,
    });
    emailCount--;
  }
  return emails;
};
