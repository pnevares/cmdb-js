const random = require('./random');

const directions = ['N', 'S', 'E', 'W'];
const streetNames = ['Third', 'First', 'Fourth', 'Park', 'Fifth', 'Main', 'Sixth', 'Oak', 'Seventh', 'Pine'];
const streetSuffixes = ['Ave', 'Blvd', 'Ct', 'Ln', 'Pkwy', 'Pl', 'Rd', 'St', 'Ter', 'Way'];
const cities = ['Fairview', 'Midway', 'Oak Grove', 'Franklin', 'Riverside', 'Centerville', 'Mount Pleasant', 'Georgetown', 'Salem', 'Greenwood'];
const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
const labels = ['Home', 'Office', 'Other'];

module.exports = () => {
  let addressCount = Math.ceil(Math.random() * 3);
  const addresses = [];

  while(addressCount > 0) {
    const streetAddress = [
      Math.ceil(Math.random() * 9999), // house number
      random(directions),
      random(streetNames),
      random(streetSuffixes),
    ].join(' ');

    addresses.push({
      primary: addressCount === 1,
      label: random(labels),
      streetAddress,
      city: random(cities),
      state: random(states),
      zip: Math.ceil(Math.random() * 89999) + 10000,
    });
    addressCount--;
  }
  return addresses;
};