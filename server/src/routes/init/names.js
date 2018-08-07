const random = require('./random');

const titles = ['Mr.', 'Ms.', 'Mx.', 'Prof.', 'Dr.'];
const firstNames = ['Abigail', 'Andrew', 'Anthony', 'Ava', 'Christopher', 'Daniel', 'Elizabeth', 'Emily', 'Emma', 'Ethan', 'Hannah', 'Isabella', 'Jacob', 'Joshua', 'Madison', 'Matthew', 'Michael', 'Olivia', 'Sophia', 'William'];
const lastNames  = ['Brown', 'Davis', 'Johnson', 'Jones', 'Miller', 'Moore', 'Smith', 'Taylor', 'Williams', 'Wilson'];

module.exports = () => ({
  title: random(titles),
  firstName: random(firstNames),
  middleName: random(firstNames),
  lastName: random(lastNames),
});
