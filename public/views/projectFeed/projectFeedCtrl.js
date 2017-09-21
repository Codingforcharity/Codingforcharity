app.controller('projectFeedCtrl', function($scope, projectFeedSrvc) {
    console.log("projectFeedCtrl")
    $scope.curUser;
    $scope.skills = [];
    $scope.filtered = false;
    $scope.originalProjects;
    $scope.projectCount = 0;
    $scope.searchProjects = (str) => {
        $scope.projects = $scope.originalProjects;
        $scope.projectCount = $scope.projects.length;
        console.log($scope.projects)
        if (str) {
            let newProjects = [];
            for (let i = 0; i < $scope.projects.length; i++) {
                if ($scope.projects[i].title.toLowerCase().includes(str.toLowerCase())) {
                    newProjects.push($scope.projects[i]);
                }
            }
            $scope.projects = newProjects;
            $scope.projectCount = $scope.projects.length;
        } else {
            $scope.getProjects();
        }

    }

    $scope.getProjects = () => {
        projectFeedSrvc.getProjects()
            .then((projects) => {
                console.log(projects.data);
                $scope.filtered = false;
                $scope.projects = [...projects.data]
                $scope.projects.map((project) => {
                    project.skills.map((skill) => {
                        $scope.skills.push(skill);
                    })
                })
                console.log("ALL SKILLS: ", $scope.skills)
                $scope.skills = $scope.skills.filter(function(item, pos) {
                    return $scope.skills.indexOf(item) == pos;
                })
                $scope.originalProjects = $scope.projects;
                $scope.projectCount = $scope.projects.length;
                console.log("SORTED SKILLS: ", $scope.skills);
                console.log($scope.projects);
            })
    };

    $scope.getLoggedUser = () => {
        projectFeedSrvc.getLoggedUser()
            .then((user) => {
                if (user.data == 'not logged in!') {
                    $scope.getProjects();
                } else {
                    $scope.curUser = Object.assign({}, user.data);
                    console.log($scope.curUser);
                    $scope.getProjects();
                }
            })
    }

    $scope.filter = (skill) => {
        $scope.filtered = true;
        $scope.skills = [skill];
        let newProjects = [];
        $scope.projects.map((project) => {
            let skillFound = false;
            project.skills.map((singleskill) => {
                if (singleskill == skill) {
                    skillFound = true;
                }
            })
            if (skillFound) {
                console.log("FOUND PROJECT");
                newProjects.push(project);
            }
        })
        $scope.projects = newProjects;
        $scope.projectCount = $scope.projects.length;
        console.log($scope.projects);
    }

    $scope.getLoggedUser();
})