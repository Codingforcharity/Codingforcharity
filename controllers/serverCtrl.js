module.exports = {
    getCharities: function(req, res, next) {
        const db = req.app.get('db');
        db.getCharities()
            .then((charities) => res.status(200).send(charities))
            .catch((err) => res.status(200).send(err));
    },
    postUser: function(req, res, next) {
        const db = req.app.get('db');
        console.log(db);
        db.postUser(req.body.authid, req.body.email, req.body.username, req.body.bio, req.body.profilepic, req.body.ischarity)
            .then((user) => res.status(200).send(user))
            .catch((err) => res.status(200).send(err));
    },
}