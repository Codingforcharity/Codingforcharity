app.controller('projectPublicDetailCtrl', function($scope, $stateParams, projectPublicDetailsSrvc) {
    console.log("projectPublicDetailsCtrl")
    $scope.curUser;
    $scope.getProjectById = () => {
        const param = $stateParams.id;
        console.log("stateparams: " + param)
        projectPublicDetailsSrvc.getProjectById(param)
            .then((project) => {
                console.log("Returned project: ", project)
                $scope.project = Object.assign({}, project.data[0]);
                console.log("scoped project: ", $scope.project);
            })
    }

    $scope.getLoggedInUser = () => {
        projectPublicDetailsSrvc.getLoggedInUser()
            .then((user) => {
                $scope.curUser = Object.assign({}, user.data);
                $scope.getProjectById();
            })
    }

    $scope.getLoggedInUser();
})