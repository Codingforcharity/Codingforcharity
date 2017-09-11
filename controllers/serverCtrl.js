module.exports = {
    getCharities: function(req, res, next) {
        const db = req.app.get('db');
        console.log("POSTING USERS WHO ARE CHARITIES");
        db.getCharities()
            .then((charities) => res.status(200).send(charities))
            .catch((err) => res.status(200).send(err));
    },
    postUser: function(req, res, next) {
        console.log("POSTING USER");
        const db = req.app.get('db');
        db.postUser(req.body.authid, req.body.email, req.body.username, req.body.bio, req.body.profilepic, req.body.ischarity)
            .then((user) => res.status(200).send(user))
            .catch((err) => res.status(200).send(err));
    },
    getUserById: function(req, res, next) {
        console.log("GET USERS BY ID: " + req.params.id)
        const db = req.app.get('db');
        db.getUserById(req.params.id)
            .then((user) => res.status(200).send(user))
            .catch((err) => res.status(200).send(err));

    },
    postProject: function(req, res, next) {
        console.log("POSTING PROJECT");
        const db = req.app.get('db');
        db.postProject(req.body.posterid, req.body.title, req.body.description)
            .then((project) => res.status(200).send(project))
            .catch((err) => res.status(200).send(err));
    },
    getProjects: function(req, res, next) {
        console.log("GETTING ALL PROJECTS");
        const db = req.app.get('db');
        db.getProjects()
            .then((projects) => res.status(200).send(projects))
            .catch((err) => res.status(200).send(err));
    },
    getProjectsById: function(req, res, next) {
        console.log("GETTING PROJECT BY ID: " + req.params.id);
        const db = req.app.get('db');
        db.getProjectsById(req.params.id)
            .then((project) => res.status(200).send(project))
            .catch((err) => res.status(200).send(err));
    },
    putProjectById: function(req, res, next) {
        console.log("CHANGING PROJECT BY ID: " + req.params.id);
        const db = req.app.get('db');
        db.putProjectById(req.params.id, req.body.title, req.body.description)
            .then((project) => res.status(200).send(project))
            .catch((err) => res.status(200).send(err));
    }
}