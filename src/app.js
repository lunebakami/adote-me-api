const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.status(200).json({ error: false, data: { message: 'Hello World' } });
});

app.listen(port);
