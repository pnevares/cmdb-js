const random = require('./random');

const labels = ['Cell', 'Home', 'Office'];

module.exports = () => {
  let phoneCount = Math.ceil(Math.random() * 3);
  const phones = [];

  while(phoneCount > 0) {
    const phoneNumber = [
      Math.ceil(Math.random() * 799) + 200,
      Math.ceil(Math.random() * 799) + 200,
      Math.ceil(Math.random() * 8999) + 1000,
    ].join('-');

    phones.push({
      primary: phoneCount === 1,
      label: random(labels),
      phoneNumber,
    });
    phoneCount--;
  }
  return phones;
};
