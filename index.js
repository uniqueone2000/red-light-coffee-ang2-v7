const express = require('express');
const app  = express();
const path = require('path');
const bodyParser 	= require('body-parser');
const mongoose = require('mongoose');
const config = require('./rlconfig/rldatabase');


const promise = mongoose.connect(config.uri, {useMongoClient: true},(err) => {
	if (err) {
		console.log('Unable to connect to the database: ', err);
	} else {
		//console.log(config.secret);
		console.log('Connected to the database: ' + config.db);
	}
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = 3500;

app.listen(3500, ()=> {
	console.log('Listening on port ' + port);
});