/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');

const server = express();
const chalk = require('chalk');
const mongoose = require('mongoose');
// const pug = require('pug')
const path = require('path');
const nodemon = require('nodemon');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const connectEnsureLogin = require('connect-ensure-login');
const mainRoutes = require('./routes/mainRoutes');
// const Employee = require('./models/supervisorRegModel')

mongoose.connect('mongodb://localhost:27017/surgery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}, (err) => {
  if (err) throw err;
  else console.log(chalk.italic.grey('You are live on the database!'));
});

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(express.static('public'));

// server.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
// }));

/*  MIDDLEWARE SETUP : PASSPORT */
// server.use(passport.initialize());
// server.use(passport.session());
// passport.use(Employee.createStrategy());
// passport.serializeUser(Employee.serializeUser());
// passport.deserializeUser(Employee.deserializeUser());

server.use('/', mainRoutes);

server.get('*', (req, res) => {
  res.send('Error');
});

server.listen(6500, () => {
  console.log(chalk.inverse.green('listening on port 6500'));
});
