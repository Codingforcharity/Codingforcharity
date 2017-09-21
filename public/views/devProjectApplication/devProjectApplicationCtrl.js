app.controller('devProjectApplicationCtrl', function($scope, devProjectApplicationSrvc, $location, $stateParams) {
    $scope.getProject = () => {
        devProjectApplicationSrvc.getProject($stateParams.id)
            .then((project) => {
                console.log(project)
                $scope.project = project.data[0]
                console.log("project:", $scope.project)
            })
    }

    $scope.getLoggedUser = () => {
        devProjectApplicationSrvc.getLoggedUser()
            .then((user) => {
                if (user.data == 'not logged in!') {} else {
                    $scope.curUser = Object.assign({}, user.data);
                    $scope.newEmail = $scope.curUser.email;
                    $scope.newName = $scope.curUser.firstname.trim() + " " + $scope.curUser.lastname.trim();
                    console.log($scope.curUser);
                    $scope.getProject();
                }
            })
    }

    $scope.submitApplication = (email, message) => {
        if ($scope.curUser.id) {
            $scope.curUser.newName = $scope.newName;
            $scope.curUser.newEmail = email;
            devProjectApplicationSrvc.submitApplication($scope.project, $scope.curUser, $scope.project.email, message)
                .then(() => {
                    $location.path('/projectfeed');
                })
        } else {
            alert("Please Log in first")
        }
    }
    $scope.getLoggedUser()

})