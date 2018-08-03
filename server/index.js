const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello world from cmdb-js server.'));

app.get('/api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({ message: 'server is alive' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
