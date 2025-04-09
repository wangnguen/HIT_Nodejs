// dotenv
require('dotenv').config();
// db
require('./configs/database');

const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3005;

const clientPage = require('./routes/client/index.route');

// middleware
app.use(morgan('dev'));

// static file
app.use(express.static(path.join(__dirname, 'public')));

// send data from fe to be
app.use(express.json());

// view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// route
app.use('/', clientPage);

app.listen(PORT, () => {
  console.log(`The website is running at ${PORT}`);
});
