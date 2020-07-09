const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var userController = require('./controller/user.controller.js');
const userModel = require('./models/user.model');
const userRoutes = require('./routes/user');

var app = express();

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/users', userRoutes);

app.listen(3000);

























