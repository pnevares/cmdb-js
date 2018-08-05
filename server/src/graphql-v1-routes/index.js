var express = require('express');
var router = express.Router();

// documentation
router.get('*', (req, res) => res.send('<html><body>GraphQL routes not implemented</body></html>'));

module.exports = router;
