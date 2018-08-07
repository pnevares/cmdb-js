const getAll = require('./get-all');
const getOne = require('./get-one');

module.exports = [
  {
    'verb': 'get',
    'path': '/contacts',
    'handler': getAll,
  },
  {
    'verb': 'get',
    'path': '/contacts/:id',
    'handler': getOne,
  },
];
