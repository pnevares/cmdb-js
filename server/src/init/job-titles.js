const random = require('./random');

const titles = ['Architect', 'Developer', 'Director', 'Designer', 'Engineer', 'Engineering Manager', 'Paleontologist', 'Product Manager', 'Researcher', 'Scientist'];
const prefixes = ['', 'Associate', 'Consulting', 'Junior', 'Lead', 'Mobile', 'Principal', 'Senior', 'Technical'];

module.exports = () => {
  const title = random(titles);
  const prefix = random(prefixes);

  return `${prefix} ${title}`.trim();
};
