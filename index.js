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

passport.use(new Auth0Strategy({
    domain: process.env.domain,
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: '/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    // console.log(profile);
    db.getUserByAuthId([profile.id])
        .then(
            function(user) {
                if (user.length < 1) {
                    db.postUser(profile.id, profile.emails[0].value, profile.nickname, "I am a blank bio", "https://openclipart.org/image/2400px/svg_to_png/177482/ProfilePlaceholderSuit.png", false).then(function(user) {
                        profile.user = user[0];
                        // console.log(user);
                        return done(null, profile);
                    });
                } else {
                    profile.user = user[0];
                    // console.log(user[0]);
                    return done(null, profile);
                }
            });
}))

app.get('/auth', passport.authenticate('auth0'))

app.get('/auth/callback',
    passport.authenticate('auth0', {
        successRedirect: '/',
        failureRedirect: '/auth'
    })
)

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// Return user object from session
app.get('/me', function(req, res) {
    // console.log(req.user.user)
    if (req.user) {
        res.send(req.user.user)
    } else {
        res.send('not logged in!');
    }
})

app.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('https://dylandoesprogramming.auth0.com/v2/logout?returnTo=' + req.query.fullUrl);
})

app.get("/api/charities", serverCtrl.getCharities);
app.post("/api/postuser", serverCtrl.postUser);
app.get("/api/user/:id", serverCtrl.getUserById);
app.put('/api/user/:id', serverCtrl.putUserById);
app.get("/api/projects", serverCtrl.getProjects);
app.get('/api/project/:id', serverCtrl.getProjectsById);
app.put('/api/project/:id', serverCtrl.putProjectById);
app.delete('/api/projects/:id', serverCtrl.deleteProjectById);
app.post('/api/chatroom/', serverCtrl.postChatRoom);
app.get('/api/chatrooms/:id', serverCtrl.getChatRoomsByUser);
app.post("/api/message/:id", serverCtrl.postMessage);
app.get('/api/messsages/:id/:userid', serverCtrl.getMessages);
app.get('/api/messages/:id', serverCtrl.getAllMessagesFromChat);
app.get("/api/project/:id/contributors", serverCtrl.getContributors);
app.post("/api/project/:id/todos", serverCtrl.postTodos);
app.get("/api/project/:id/todos", serverCtrl.getTodos);
app.delete("/api/project/:id/todos/:todoid", serverCtrl.deleteTodo);
app.get('/api/project/:id/links', serverCtrl.getLinks);
app.post('/api/project/:id/links', serverCtrl.postLinks);
app.get('/api/project/:id/comments', serverCtrl.getComments);
app.post('/api/project/:id/comments', serverCtrl.postComment);
app.post('/api/project/:id/reply', serverCtrl.postReply)
app.get('/api/user/:id/skills', serverCtrl.getUserSkills);
app.put("/api/user/:id/update", serverCtrl.updateUser);
app.get("/api/user/:id/projects", serverCtrl.getUserProjects);
app.get("/api/user/:id/comments", serverCtrl.getCommentsById);
app.post("/api/user/:id/comments", serverCtrl.postProfileComment);
app.post("/api/user/:id/replies", serverCtrl.postProfileReply);
app.post("/api/projects/create/:id", serverCtrl.postProject);
app.listen(process.env.PORT, () => console.log('listening port 5001'));