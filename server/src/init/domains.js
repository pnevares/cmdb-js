const random = require('./random');

const domains = [
  'aol.com',
  'msn.com',
  'gmail.com',
  'yahoo.com',
];

module.exports = () => random(domains);
