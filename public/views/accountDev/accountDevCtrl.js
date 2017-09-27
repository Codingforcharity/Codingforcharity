app.controller('accountDevCtrl', function($scope, $stateParams, accountDevSrvc) {
    // console.log("accountDev link")
    $scope.curUser;
    $scope.ownPage = false;
    $scope.isActive = true;
    $scope.newSkills = "";
    $scope.modalSet = false;
    $scope.showPictures = false;
    $scope.avatarArr = [];

    $scope.changeModal = (project) => {
        console.log("open modal")
        $scope.modal = {
            title: project.title,
            desc: project.description,
            creator: project.username,
            pic: project.profilepic,
            name: project.firstname + " " + project.lastname,

        }
        $scope.modalSet = true;
    }

    $scope.submitReply = (comment, reply) => {
        if (comment) {
            if (reply) {
                accountDevSrvc.submitReply($stateParams.id, comment.commentid, reply, $scope.curUser.id)
                    .then((comments) => {
                        console.log(comments)
                        $scope.userComments = comments.data;
                    })
            } else {
                console.log("Didnt type anything")
            }
        }
    }

    $scope.submitComment = (comment) => {
        if (comment) {
            accountDevSrvc.submitComment($stateParams.id, comment, $scope.curUser.id)
                .then((comments) => {
                    $scope.userComments = comments.data;
                })
        } else {
            console.log("Didnt type anything");
        }
    }

    $scope.getCommentsById = () => {
        accountDevSrvc.getCommentsById($stateParams.id)
            .then((comments) => {
                console.log(comments.data);
                $scope.userComments = comments.data;
            })
    }

    $scope.getProjectsById = () => {
        accountDevSrvc.getProjectsById($stateParams.id)
            .then((projects) => {
                console.log("USERS PROJECTS: ", projects.data);
                $scope.userProjects = projects.data;
                $scope.getCommentsById();
            })
    }

    $scope.getUserSkills = (id) => {
        accountDevSrvc.getUserSkills(id)
            .then((skills) => {
                // console.log("User Skills: ", skills.data)
                if ($scope.ownPage) {
                    $scope.curUser.skills = "";
                    for (let i = 0; i < skills.data.length; i++) {
                        if (i == 0) {
                            $scope.curUser.skills += skills.data[i].skill;
                        } else {
                            $scope.curUser.skills += ", " + skills.data[i].skill;
                        }
                    }
                    $scope.newSkills = $scope.curUser.skills;
                    console.log($scope.curUser.skills)
                } else {
                    $scope.pageOwner.skills = skills.data;
                    console.log($scope.pageOwner.skills)
                }
            })
    }

    $scope.getUpdatedUser = (userid) => {
        accountDevSrvc.getUserById(userid)
            .then((user) => {
                $scope.curUser = Object.assign({}, user.data[0]);
                $scope.getUserByParams();
                $scope.getProjectsById();
            })
    }

    $scope.getLoggedInUser = () => {
        accountDevSrvc.getLoggedInUser()
            .then((user) => {
                $scope.curUser = Object.assign({}, user.data);
                $scope.getUpdatedUser($scope.curUser.id)
            })
    }
    $scope.getUserByParams = () => {
        const param = $stateParams.id;
        if ($scope.curUser.id != param) {
            accountDevSrvc.getUserByParams(param)
                .then((user) => {
                    $scope.pageOwner = Object.assign({}, user.data[0]);
                    // console.log($scope.pageOwner);
                    $scope.getUserSkills($stateParams.id)
                })
        } else {
            $scope.ownPage = true;
            $scope.newFirstName = $scope.curUser.firstname;
            $scope.newLastName = $scope.curUser.lastname;
            $scope.newBio = $scope.curUser.bio;
            $scope.newProfilePic = $scope.curUser.profilepic;
            // console.log("On your own page!", $scope.curUser)
            $scope.getUserSkills($stateParams.id)
        }
    }

    $scope.subChanges = (newFirstName, newLastName, newBio, newSkills) => {
        let newUser = {};
        if (newFirstName) {
            newUser.firstname = newFirstName;
        } else {
            if ($scope.curUser.firstname) {
                newUser.firstname = $scope.curUser.firstname;
            } else {
                newUser.firstname = undefined;
            }
        }

        if (newLastName) {
            newUser.lastname = newLastName;
        } else {
            if ($scope.curUser.lastname) {
                newUser.lastname = $scope.curUser.lastname;
            } else {
                newUser.lastname = undefined;
            }
        }

        if (newBio) {
            newUser.bio = newBio;
        } else {
            if ($scope.curUser.bio) {
                newUser.bio = $scope.curUser.bio;
            } else {
                newUser.bio = undefined;
            }
        }

        if (newSkills) {
            // console.log(newSkills)
            newSkills = newSkills.split(',');
            for (let i = 0; i < newSkills.length; i++) {
                newSkills[i] = newSkills[i].trim();
            }
            newUser.skills = newSkills;
            console.log(newSkills)
        } else {
            if ($scope.curUser.skills) {
                newUser.skills = $scope.curUser.skills;
            } else {
                newUser.skills = undefined;
            }
        }

        newUser.id = $scope.curUser.id;
        newUser.authid = $scope.curUser.authid;
        newUser.email = $scope.curUser.email;
        newUser.username = $scope.curUser.username;
        newUser.ischarity = $scope.curUser.ischarity;
        newUser.profilepic = $scope.curUser.profilepic;
        accountDevSrvc.updateUser($stateParams.id, newUser)
            .then((updatedUser) => {
                // console.log("updated user", updatedUser)
                $scope.curUser = updatedUser.data[0];
                // console.log($scope.curUser);
                $scope.getUserSkills($stateParams.id)
            });
    }

    $scope.changeTab = (str) => {
        let messages = document.getElementById('messages');
        let projects = document.getElementById('projects');
        if (str === 'messages') {

            $scope.isActive = true;
        } else {
            projects.className = "is-active";
            messages.className = "";
            $scope.isActive = false;
        }
    }

    $scope.changePicture = () => {
        console.log('changing picture')
        $scope.showPictures = true;
    }

    $scope.updatePicture = (avatar) => {
        // console.log(avatar);

        for (let i = 0; i < 17; i++) {
            if (avatar === "avatar" + i) {
                let imgUrl = "./img/avatars/" + i + ".svg";
                // console.log(imgUrl)
                accountDevSrvc.updateImg($scope.curUser.id, imgUrl)
                    .then((user) => {
                        $scope.curUser = Object.assign({}, user.data[0]);
                        $scope.showPictures = false;
                    })
            }
        }
    }


    $scope.getLoggedInUser();

})