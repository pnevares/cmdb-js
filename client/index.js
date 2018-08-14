const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(`
<html>
  <head><title>Hello world from cmdb-js client.</title></head>
  <body></body>
  <script src="app.js"></script>
</html>`));

app.get('/app.js', (req, res) => res.sendFile(path.join(__dirname, 'app.js')));

app.listen(port, () => console.log(`cmdb-js client listening on port ${port}!`));
