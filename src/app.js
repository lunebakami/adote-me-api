require('dotenv/config');
const express = require('express');
const db = require('./database');

const UserController = require('./controllers/UserController');
const AnimalController = require('./controllers/AnimalController');

console.log('Testando o banco...');
db.test();

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.status(200).json({ error: false, data: { message: 'Hello World' } });
});

app.post('/user', UserController.store);
app.get('/user', UserController.index);
app.put('/user/:id', UserController.update);
app.delete('/user/:id', UserController.destroy);

app.post('/animal', AnimalController.store);
app.get('/animal', AnimalController.index);
app.put('/animal/:id', AnimalController.update);
app.delete('/animal/:id', AnimalController.destroy);

app.listen(port);
