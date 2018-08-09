const random = require('./random');

const prefixes = ['Advanced', 'American', 'Global', 'Union', 'United'];
const suffixes = ['Co', 'Corp', 'Corporation', 'GmbH', 'Inc', 'Incorporated', 'LLC', 'Partners', 'PLC'];

module.exports = () => {
  const prefix = random(prefixes);
  const suffix = random(suffixes);

  return `${prefix} ${suffix}`;
};
