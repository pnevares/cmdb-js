module.exports = [
  {
    'verb': 'get',
    'path': '/contacts',
    'handler': (req, res) => res.json(
      ['all contacts']
    ),
  },
  {
    'verb': 'get',
    'path': '/contact',
    'handler': (req, res) => res.json(
      'single contact'
    ),
  }
];