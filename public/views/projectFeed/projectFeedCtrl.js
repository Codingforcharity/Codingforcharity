app.controller("projectFeedCtrl", function($scope, projectFeedSrvc) {
    console.log("projectFeedCtrl");
    $scope.curUser;
    $scope.skills = [];
    $scope.filtered = false;
    $scope.originalProjects;
    $scope.projectCount = 0;
    $scope.modalSet = false;
    $scope.searchProjects = str => {
        $scope.projects = $scope.originalProjects;
        $scope.projectCount = $scope.projects.length;
        console.log($scope.projects);
        if (str) {
            let newProjects = [];
            for (let i = 0; i < $scope.projects.length; i++) {
                if (
                    $scope.projects[i].title.toLowerCase().includes(str.toLowerCase())
                ) {
                    newProjects.push($scope.projects[i]);
                }
            }
            $scope.projects = newProjects;
            $scope.projectCount = $scope.projects.length;
        } else {
            $scope.getProjects();
        }
    };

    $scope.getProjects = () => {
        $scope.skills = [];
        projectFeedSrvc.getProjects().then(projects => {
            console.log(projects.data);
            $scope.filtered = false;
            $scope.projects = [...projects.data];
            $scope.projects.map(project => {
                project.skills.map(skill => {
                    $scope.skills.push(skill);
                });
                // $scope.projects.showModal = false;
            });
            console.log("ALL SKILLS: ", $scope.skills);
            $scope.skills = $scope.skills.filter(function(item, pos) {
                return $scope.skills.indexOf(item) == pos;
            });
            console.log($scope.skills);
            $scope.originalProjects = $scope.projects;
            $scope.projectCount = $scope.projects.length;
            // console.log("SORTED SKILLS: ", $scope.skills);
            console.log($scope.projects);
        });
    };

    $scope.getUpdatedUser = (userid) => {
        projectFeedSrvc.getUserById(userid)
            .then((user) => {
                $scope.curUser = Object.assign({}, user.data[0]);
                $scope.getProjects();
            })
    }

    $scope.getLoggedUser = () => {
        projectFeedSrvc.getLoggedUser().then(user => {
            if (user.data == "not logged in!") {
                $scope.getProjects();
            } else {
                $scope.curUser = Object.assign({}, user.data);
                console.log($scope.curUser);
                $scope.getUpdatedUser($scope.curUser.id)
            }
        });
    };

    $scope.filter = skill => {
        $scope.filtered = true;
        $scope.skills = [skill];
        let newProjects = [];
        $scope.projects.map(project => {
            let skillFound = false;
            project.skills.map(singleskill => {
                if (singleskill.toLowerCase().trim() == skill.toLowerCase().trim()) {
                    skillFound = true;
                }
            });
            if (skillFound) {
                console.log("FOUND PROJECT");
                newProjects.push(project);
            }
        });
        $scope.projects = newProjects;
        $scope.projectCount = $scope.projects.length;
        console.log($scope.projects);
    };

    $scope.showModal = (project) => {
        $scope.modal = {
            title: project.title,
            desc: project.description,
            creator: project.username,
            pic: project.profilepic,
            name: project.firstname + " " + project.lastname,

        }
        $scope.modalSet = true;
    }


    $scope.getLoggedUser();

});