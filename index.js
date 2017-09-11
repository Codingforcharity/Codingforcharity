const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const massive = require('massive');
const gulp = require('gulp');
const serverCtrl = require('./controllers/serverCtrl')
    // const config = require("./config");
const app = module.exports = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(session({
//     resave: true, //Without this you get a constant warning about default values
//     saveUninitialized: true, //Without this you get a constant warning about default values
//     // secret: process.env.secret
//     secret: config.secret
// }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

app.get("/api/charities", serverCtrl.getCharities);

app.listen(3000, () => console.log('listening port 3000'));