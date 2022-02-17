require('dotenv/config');
const express = require('express');
const db = require('./database');
const cors = require('cors');

const UserController = require('./controllers/UserController');
const AnimalController = require('./controllers/AnimalController');
const AdoptionController = require('./controllers/AdoptionController');
const RationController = require('./controllers/RationController');
const RationDonationController = require('./controllers/RationDonationController');
const MedDonationController = require('./controllers/MedDonationController');
const MedUseController = require('./controllers/MedUseController');
const VacinationController = require('./controllers/VacinationController');

console.log('Testando o banco...');
db.test();

const app = express();

app.use(cors());
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

app.post('/adoption', AdoptionController.store);
app.get('/adoption', AdoptionController.index);
app.put('/adoption/:id', AdoptionController.update);
app.delete('/adoption/:id', AdoptionController.destroy);

app.post('/ration', RationController.store);
app.get('/ration', RationController.index);
app.put('/ration/:id', RationController.update);
app.delete('/ration/:id', RationController.destroy);

app.post('/ration_donation', RationDonationController.store);
app.get('/ration_donation', RationDonationController.index);
app.put('/ration_donation/:id', RationDonationController.update);
app.delete('/ration_donation/:id', RationDonationController.destroy);

app.post('/med_donation', MedDonationController.store);
app.get('/med_donation', MedDonationController.index);
app.put('/med_donation/:id', MedDonationController.update);
app.delete('/med_donation/:id', MedDonationController.destroy);

app.post('/med_use', MedUseController.store);
app.get('/med_use', MedUseController.index);
app.put('/med_use/:id', MedUseController.update);
app.delete('/med_use/:id', MedUseController.destroy);

app.post('/vacination', VacinationController.store);
app.get('/vacination', VacinationController.index);
app.put('/vacination/:id', VacinationController.update);
app.delete('/vacination/:id', VacinationController.destroy);

app.listen(port);
