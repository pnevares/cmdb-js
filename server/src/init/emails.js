const random = require('./random');

const domains = ['aol.com', 'msn.com', 'gmail.com', 'yahoo.com'];
const labels = ['Work', 'Personal'];

module.exports = () => {
  let emailCount = Math.ceil(Math.random() * 3);
  const emails = [];

  while(emailCount > 0) {
    emails.push({
      primary: emailCount === 1,
      label: random(labels),
      emailAddress: '@' + random(domains),
    });
    emailCount--;
  }
  return emails;
};