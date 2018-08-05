var express = require('express');
var router = express.Router();

// documentation
router.get('/', (req, res) => res.send('<html><body>REST v1 route documentation</body></html>'));

// all contacts
router.get('/contacts', (req, res) => res.json(
  ['all contacts']
));

module.exports = router;
