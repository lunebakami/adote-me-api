require('dotenv/config');
const express = require('express');

const db = require('./database');
console.log('Testando o banco...');
db.test();

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.status(200).json({ error: false, data: { message: 'Hello World' } });
});

app.listen(port);
