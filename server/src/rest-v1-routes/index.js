const express = require('express');
const router = express.Router();

const contactsRoutes = require('./contacts');

// documentation
router.get('/', (req, res) => res.send('<html><body>REST v1 route documentation</body></html>'));

contactsRoutes.forEach((route) => {
  const { verb, path, handler } = route;
  router[verb](path, handler);
});

module.exports = router;
