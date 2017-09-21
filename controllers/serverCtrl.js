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
        console.log("POSTING PROJECT FOR USER: " + req.params.id);
        const db = req.app.get('db');
        db.postProject(req.params.id, req.body.title, req.body.desc, req.body.skills)
            .then((project) => {
                console.log("THIS IS THE PROJECT: ", project[0])
                db.postWorkingProject(project[0].id, req.params.id)
                    .then(() => {
                        res.status(200).send(project)
                    })
            })
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
                console.log(project);
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
                            if (replies.length > 0) {
                                for (var j = 0; j < newComments.length; j++) {
                                    if (newComments[j].messageid == replies[0].messageid) {
                                        newComments[j].replies = replies;
                                        // console.log(newComments[j])
                                    }
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
    },

    postComment: function(req, res, next) {
        console.log("POSTING COMMENT TO PROJECT: " + req.params.id);
        const db = req.app.get('db');
        let newComments = [];
        let counter = 0;
        db.postComment(req.params.id, req.body.comment, req.body.userid)
            .then((comments) => {
                // console.log("COMMENTS: ", comments)

                for (var i = 0; i < comments.length; i++) {
                    newComments.push(comments[i])
                    db.getReplies(newComments[i].messageid)
                        .then((replies) => {
                            if (replies.length > 0) {
                                for (var j = 0; j < newComments.length; j++) {
                                    if (newComments[j].messageid == replies[0].messageid) {
                                        newComments[j].replies = replies;
                                        console.log(newComments[j])
                                    }
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


    },

    postReply: function(req, res, next) {
        console.log("POSTING REPLY TO PROJECTL " + req.params.id);
        const db = req.app.get('db');
        let newComments = [];
        let counter = 0;
        db.postReply(req.body.comment.messageid, req.body.reply, req.body.userid)
            .then(() => {
                db.getComments(req.params.id)
                    .then((comments) => {
                        // console.log("COMMENTS: ", comments)

                        for (var i = 0; i < comments.length; i++) {
                            newComments.push(comments[i])
                            db.getReplies(newComments[i].messageid)
                                .then((replies) => {
                                    if (replies.length > 0) {
                                        for (var j = 0; j < newComments.length; j++) {
                                            if (newComments[j].messageid == replies[0].messageid) {
                                                newComments[j].replies = replies;
                                                // console.log(newComments[j])
                                            }
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
            })

    },
    getUserSkills: function(req, res, next) {
        console.log("GETTING SKILLS FOR USER: " + req.params.id);
        const db = req.app.get('db');
        db.getUserSkills(req.params.id)
            .then((skills) => res.status(200).send(skills))
            .catch((err) => res.status(200).send(err));
    },
    updateUser: function(req, res, next) {
        console.log("UPDATING THE USER: " + req.params.id);
        const db = req.app.get('db');
        db.putUserById(req.params.id, req.body.user.bio, req.body.user.profilepic, req.body.user.ischarity, req.body.user.firstname, req.body.user.lastname)
            .then((updatedUser) => {
                console.log(updatedUser);
                console.log("SKILLS: ", req.body.user.skills);
                for (let i = 0; i < req.body.user.skills.length; i++) {
                    db.getUserSkillsByName(req.params.id, req.body.user.skills[i])
                        .then((skill) => {
                            if (skill.length > 0) {

                            } else {
                                db.postSkills(req.params.id, req.body.user.skills[i])
                                    .then((skills) => {
                                        // if (i < req.body.user.skills.length - 1) {
                                        //     console.log("Still runnning")
                                        // } else {
                                        //     console.log("Finished", skills);
                                        //     res.status(200).send(skills)
                                        // }
                                        res.status(200).send(updatedUser);
                                    })
                            }
                        })
                }
            })

    },
    getUserProjects: function(req, res, next) {
        console.log("GETTING USER PROJECTS: " + req.params.id);
        const db = req.app.get('db');
        db.getUserProjects(req.params.id)
            .then((projects) => {
                res.status(200).send(projects);
            })
    },
    getCommentsById: function(req, res, next) {
        console.log("GETTING PROJECTS BY USER: " + req.params.id);
        const db = req.app.get('db');
        db.getCommentsById(req.params.id)
            .then((commentInfo) => {
                for (let i = 0; i < commentInfo.length; i++) {
                    db.getProfileReplies(commentInfo[i].commentid)
                        .then((replies) => {
                            commentInfo[i].replies = replies
                            if (i == commentInfo.length - 1) {
                                res.status(200).send(commentInfo);
                            }
                        })
                }
            })
    },
    postProfileComment: function(req, res, next) {
        console.log("POSTING COMMENT ON USER PAGE: " + req.params.id);
        const db = req.app.get('db');
        db.postProfileComment(req.params.id, req.body.comment, req.body.userid)
            .then((commentInfo) => {
                for (let i = 0; i < commentInfo.length; i++) {
                    db.getProfileReplies(commentInfo[i].commentid)
                        .then((replies) => {
                            commentInfo[i].replies = replies
                            if (i == commentInfo.length - 1) {
                                res.status(200).send(commentInfo);
                            }
                        })
                }
            })
    },
    postProfileReply: function(req, res, next) {
        console.log("POSTING REPLY ON USER PAGE: " + req.params.id);
        const db = req.app.get('db');
        db.postProfileReply(req.body.commentid, req.body.reply, req.body.userid, req.params.id)
            .then((commentInfo) => {
                console.log(commentInfo)
                for (let i = 0; i < commentInfo.length; i++) {
                    db.getProfileReplies(commentInfo[i].commentid)
                        .then((replies) => {
                            commentInfo[i].replies = replies
                            if (i == commentInfo.length - 1) {
                                res.status(200).send(commentInfo);
                            }
                        })
                }
            })
    }

}