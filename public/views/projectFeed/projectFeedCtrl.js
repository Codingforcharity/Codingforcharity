app.controller('projectFeedCtrl', function($scope, projectFeedSrvc) {
    console.log("projectFeedCtrl")
    $scope.curUser;
    $scope.getProjects = () => {
        projectFeedSrvc.getProjects()
            .then((projects) => {
                console.log(projects.data);
                $scope.projects = [...projects.data]
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

    $scope.getLoggedUser();
})