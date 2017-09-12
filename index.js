const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const massive = require('massive');
const gulp = require('gulp');
const dotenv = require('dotenv');
require('dotenv').config();
const serverCtrl = require('./controllers/serverCtrl')
const connectionString = process.env.DATABASE_URL;
const app = module.exports = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
    resave: true, //Without this you get a constant warning about default values
    saveUninitialized: true, //Without this you get a constant warning about default values`
    secret: process.env.secret
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('bundle'));
massive(connectionString).then(db => {
    app.set('db', db)
})

app.get("/api/charities", serverCtrl.getCharities);
app.post("/api/postuser", serverCtrl.postUser);
app.get("/api/user/:id", serverCtrl.getUserById);
app.put('/api/user/:id', serverCtrl.putUserById);
app.post('/api/postproject', serverCtrl.postProject);
app.get("/api/projects", serverCtrl.getProjects);
app.get('/api/project/:id', serverCtrl.getProjectsById);
app.put('/api/project/:id', serverCtrl.putProjectById);
app.delete('/api/projects/:id', serverCtrl.deleteProjectById);
app.post('/api/chatroom/', serverCtrl.postChatRoom);
app.listen(5001, () => console.log('listening port 5001'));
