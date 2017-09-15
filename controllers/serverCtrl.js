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
        console.log("GET USER BY ID: " + req.params.id)
        const db = req.app.get('db');
        db.getUserById(req.params.id)
            .then((user) => res.status(200).send(user))
            .catch((err) => res.status(200).send(err));

    },
    putUserById: function(req, res, next) {
        console.log("PUT USER BY ID: " + req.params.id)
        const db = req.app.get('db');
        db.putUserById(req.params.id, req.body.username, req.body.bio, req.body.ischarity)
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
            .then((projects) => {
                projects = projects.map(project => {
                    project.skills = project.skills.split(',');
                    return project;
                });
                res.status(200).send(projects);
            })
            .catch((err) => res.status(200).send(err));
    },
    getProjectsById: function(req, res, next) {
        console.log("GETTING PROJECT BY ID: " + req.params.id);
        const db = req.app.get('db');
        db.getProjectsById(req.params.id)
            .then((project) => {
                project[0].skills = project[0].skills.split(',');
                res.status(200).send(project)
            })
            .catch((err) => res.status(200).send(err));
    },
    putProjectById: function(req, res, next) {
        console.log("CHANGING PROJECT BY ID: " + req.params.id);
        const db = req.app.get('db');
        db.putProjectById(req.params.id, req.body.title, req.body.description)
            .then((project) => res.status(200).send(project))
            .catch((err) => res.status(200).send(err));
    },
    deleteProjectById: function(req, res, next) {
        console.log("DELETING PROJECT BY ID: " + req.params.id);
        const db = req.app.get('db');
        db.deleteProjectById(req.params.id)
            .then((project) => res.status(200).send(projects))
            .catch((err) => res.status(200).send(err));
    },
    postChatRoom: function(req, res, next) {
        console.log("CREATING A CHAT ROOM");
        const db = req.app.get('db');
        db.postChatRoom(req.body.name, req.body.userid)
            .then((chatroom) => res.status(200).send(chatroom))
            .catch((err) => res.status(200).send(err));
    },
    getChatRoomsByUser: function(req, res, next) {
        console.log("GETTING CHAT ROOMS BY USERID: " + req.params.id);
        const db = req.app.get('db');
        db.getChatRoomsByUser(req.params.id)
            .then((chatrooms) => res.status(200).send(chatrooms))
            .catch((err) => res.status(200).send(err));
    },
    postMessage: function(req, res, next) {
        console.log("POSTING A MESSAGE TO CHATROOM: " + req.params.id);
        const db = req.app.get('db');
        db.postMessage(req.body.message, req.body.userid, req.params.id, new Date())
            .then((message) => res.status(200).send(message))
            .catch((err) => res.status(200).send(err));
    },
    getMessages: function(req, res, next) {
        console.log("GETTING USER MESSAGES FOR A CHAT ROOM: " + req.params.id);
        const db = req.app.get('db');
        db.getMessages(req.params.id, req.params.userid)
            .then((messages) => res.status(200).send(messages))
            .catch((err) => res.status(200).send(err));
    },
    getAllMessagesFromChat: function(req, res, next) {
        console.log("GETTING ALL MESSAGES FOR CHATROOM: " + req.params.id);
        const db = req.app.get('db');
        db.getAllMessagesFromChat(req.params.id)
            .then((messages) => res.status(200).send(messages))
            .catch((err) => res.status(200).send(err));
    },
    getContributors: function(req, res, next) {
        console.log("GETTING ALL CONTRIBUTORS FOR PROJECT:" + req.params.id);
        const db = req.app.get('db');
        db.getContributors(req.params.id)
            .then((users) => {
                res.status(200).send(users)
            })
            .catch((err) => res.status(200).send(err));
    },
    getTodos: function(req, res, next) {
        console.log("GETTING TODOS FOR PROJECT: " + req.params.id);
        const db = req.app.get('db');
        db.getTodos(req.params.id)
            .then((todos) => res.status(200).send(todos))
            .catch((err) => res.status(200).send(err));
    },
    postTodos: function(req, res, next) {
        console.log("POSTING TODOS FOR PROJECT: " + req.params.id);
        const db = req.app.get('db');
        db.postTodos(req.params.id, req.body.todo)
            .then((todos) => {
                console.log("NEW TODO LIST: ", todos)
                res.status(200).send(todos)
            })
            .catch((err) => res.status(200).send(err));

    },
    deleteTodo: function(req, res, next) {
        console.log("DELETING TODO: " + req.params.todoid);
        const db = req.app.get('db');
        db.deleteTodo(req.params.todoid, req.params.id)
            .then((todos) => res.status(200).send(todos))
            .catch((err) => res.status(200).send(err));
    },
    getLinks: function(req, res, next) {
        console.log("GETTING LINKS FROM PROJECT: " + req.params.id);
        const db = req.app.get('db');
        db.getLinks(req.params.id)
            .then((links) => res.status(200).send(links))
            .catch((err) => res.status(200).send(err));
    },
    postLinks: function(req, res, next) {
        console.log("POST LINK FROM PROJECT: " + req.params.id);
        const db = req.app.get('db');
        db.postLinks(req.params.id, req.body.linkname, req.body.linkurl)
            .then((links) => res.status(200).send(links))
            .catch((err) => res.status(200).send(err));
    },
    getComments: function(req, res, next) {
        console.log("GETTING COMMENTS FROM PROJECT: " + req.params.id);
        const db = req.app.get('db');
        let newComments = [];
        let counter = 0;
        db.getComments(req.params.id)
            .then((comments) => {
                // console.log("COMMENTS: ", comments)

                for (var i = 0; i < comments.length; i++) {
                    newComments.push(comments[i])
                    db.getReplies(newComments[i].messageid)
                        .then((replies) => {
                            for (var j = 0; j < newComments.length; j++) {
                                if (newComments[j].messageid == replies[0].messageid) {
                                    newComments[j].replies = replies;
                                    console.log(newComments[j])
                                }
                            }
                            counter++;
                            checkDone();
                        })
                }

                function checkDone() {
                    if (counter >= newComments.length) {
                        res.status(200).send(newComments);
                    }
                }
            })
            .catch((err) => res.status(200).send(err))
    }

}