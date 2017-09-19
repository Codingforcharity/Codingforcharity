app.controller('accountDevCtrl', function($scope, $stateParams, accountDevSrvc) {
    console.log("accountDev link")
    $scope.curUser;
    $scope.ownPage = false;
    $scope.newSkills = "";
    $scope.getUserSkills = (id) => {
        accountDevSrvc.getUserSkills(id)
            .then((skills) => {
                console.log("User Skills: ", skills.data)
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
                } else {
                    $scope.pageOwner.skills = skills.data;
                }
            })
    }

    $scope.getLoggedInUser = () => {
        accountDevSrvc.getLoggedInUser()
            .then((user) => {
                if (!user.data.ischarity) {
                    $scope.curUser = Object.assign({}, user.data);
                    $scope.getUserByParams();
                }
            })
    }
    $scope.getUserByParams = () => {
        const param = $stateParams.id;
        if ($scope.curUser.id != param) {
            accountDevSrvc.getUserByParams(param)
                .then((user) => {
                    $scope.pageOwner = Object.assign({}, user.data[0]);
                    console.log($scope.pageOwner);
                    $scope.getUserSkills($stateParams.id)
                })
        } else {
            $scope.ownPage = true;
            $scope.newFirstName = $scope.curUser.firstname;
            $scope.newLastName = $scope.curUser.lastname;
            $scope.newBio = $scope.curUser.bio;
            $scope.newProfilePic = $scope.curUser.profilepic;
            console.log("On your own page!", $scope.curUser)
            $scope.getUserSkills($stateParams.id)
        }
    }

    $scope.subChanges = (newProfilePic, newFirstName, newLastName, newBio, newSkills) => {
        let newUser = {};
        if (newProfilePic) {
            newUser.profilepic = newProfilePic;
        } else {
            newUser.profilepic = $scope.curUser.profilepic;
        }

        if (newFirstName) {
            newUser.firstname = newFirstName;
        } else {
            if ($scope.curUser.firstname) {
                newUser.firstname = $scope.curUser.firstname;
            } else {
                newUser.firstname = NULL;
            }
        }

        if (newLastName) {
            newUser.lastname = newLastName;
        } else {
            if ($scope.curUser.lastname) {
                newUser.lastname = $scope.curUser.lastname;
            } else {
                newUSer.lastname = NULL;
            }
        }

        if (newBio) {
            newUser.bio = newBio;
        } else {
            if ($scope.curUser.bio) {
                newUser.bio = $scope.curUser.bio;
            } else {
                newUser.bio = NULL;
            }
        }

        if (newSkills) {
            console.log(newSkills)
            newSkills = newSkills.split(',');
            for (let i = 0; i < newSkills.length; i++) {
                newSkills[i] = newSkills[i].trim();
            }
            newUser.skills = newSkills;
        } else {
            if ($scope.curUser.skills) {
                newUser.skills = $scope.curUser.skills;
            } else {
                newUser.skills = NULL;
            }
        }

        newUser.id = $scope.curUser.id;
        newUser.authid = $scope.curUser.authid;
        newUser.email = $scope.curUser.email;
        newUser.username = $scope.curUser.username;
        newUser.ischarity = $scope.curUser.ischarity;
        accountDevSrvc.updateUser($stateParams.id, newUser)
            .then((updatedUser) => {
                console.log("updated user", updatedUser)
                $scope.curUser = updatedUser.data[0];
                console.log($scope.curUser);
                $scope.getUserSkills($stateParams.id)
            });
    }
    $scope.getLoggedInUser();
})