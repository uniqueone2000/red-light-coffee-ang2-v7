const express = require('express');
const app  = express();
const mongoose = require('mongoose');
const config = require('./rlconfig/rldatabase');

mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('Unable to connect to the database: ', err);
	} else {
		//console.log(config.secret);
		console.log('Connected to the database: ' + config.db);
	}
});

app.get('*', (req, res) => {
	res.send('hello charles');
});

const port = 3500;

app.listen(3500, ()=> {
	console.log('Listening on port ' + port);
});