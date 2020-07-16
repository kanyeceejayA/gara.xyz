const express = require('express')
const server = express()
// const mongoose = require('mongoose')
// const pug = require('pug')
// const path = require('path')
const nodemon = require('nodemon')
// const bodyParser = require('body-parser')
// const session = require('express-session');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const connectEnsureLogin = require('connect-ensure-login');
// const loginRoutes = require('./routes/loginRoutes')
// const Employee = require('./models/supervisorRegModel')


mongoose.connect('mongodb://localhost:27017/surgery', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, function (err) {
    if (err) throw err;
    else
        console.log('You are live');
})

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(express.static('public'))

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

// server.use('/', loginRoutes)

//Employee.register({username:'steph', active: false}, 'yusuf');

server.get('*', (req, res) => {
    res.send('Error')
})

server.listen(9111, () => {
    console.log('listening on port 9111');

})