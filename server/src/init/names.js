const random = require('./random');

const titles = ['Mr.', 'Ms.', 'Mx.', 'Prof.', 'Dr.'];
const firstNames = ['Jacob', 'Emily', 'Michael', 'Isabella', 'Ethan', 'Emma', 'Joshua', 'Ava', 'Daniel', 'Madison', 'Christopher', 'Sophia', 'Anthony', 'Olivia', 'William', 'Abigail', 'Matthew', 'Hannah', 'Andrew', 'Elizabeth'];
const lastNames  = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];

module.exports = () => ({
  title: random(titles),
  firstName: random(firstNames),
  middleName: random(firstNames),
  lastName: random(lastNames),
});
