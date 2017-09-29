app.controller('createProjectCtrl', function($scope, createProjectSrvc, $location) {
    console.log("createProjectCtrl")

    $scope.submitProject = (title, type, desc, terms) => {
        console.log(title, type, desc, terms)
        if (title) {
            if (type) {
                if (desc) {
                    if (terms) {
                        createProjectSrvc.createProject(title, desc, type, $scope.curUser.id)
                            .then((project) => {
                                console.log(project)
                                $location.path('/projectfeed');
                            })
                    }
                }
            }
        }
    }

    $scope.getLoggedInUser = () => {
        createProjectSrvc.getLoggedInUser()
            .then((user) => {
                $scope.curUser = Object.assign({}, user.data);
            })
    }

    $scope.getLoggedInUser();

})