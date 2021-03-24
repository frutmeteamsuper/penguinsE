const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const newBookAppToUser = require('./newBookAppToUser');
const newBookAppToAdmin = require('./newBookAppToAdmin');
const newValidationAppToUser = require('./newValidationAppToUser');
const newValidationAppToAdmin = require('./newValidationAppToAdmin');
const successValidation = require('./successValidation');
const newContactAppToAdmin = require('./newContactAppToAdmin');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/newBookAppToUser', (req, res) => {
	newBookAppToUser(req.body);
	res.status(200).send;
})
app.post('/newBookAppToAdmin', (req, res) => {
	newBookAppToAdmin(req.body);
	res.status(200).send;
})
app.post('/newValidationAppToUser', (req, res) => {
	newValidationAppToUser(req.body);
	res.status(200).send;
})
app.post('/newValidationAppToAdmin', (req, res) => {
	newValidationAppToAdmin(req.body);
	res.status(200).send;
})
app.post('/successValidation', (req, res) => {
	successValidation(req.body);
	res.status(200).send;
})
app.post('/newContactAppToAdmin', (req, res) => {
	newContactAppToAdmin(req.body);
	res.status(200).send;
})
app.listen(3005, () => {
console.log('Servidor corriendo')
});
