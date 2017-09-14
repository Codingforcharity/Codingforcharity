app.controller('projectPublicDetailCtrl', function($scope, $stateParams, projectPublicDetailsSrvc) {
    console.log("projectPublicDetailsCtrl")
    $scope.curUser;
    $scope.getProjectById = () => {
        const param = $stateParams.id;
        projectPublicDetailsSrvc.getProjectById(param)
            .then((project) => {
                console.log(project.data);
            })
    }

    $scope.getLoggedInUser = () => {
        projectPublicDetailsSrvc.getLoggedInUser()
            .then((user) => {
                $scope.curUser = Object.assign({}, user.data);
                $scope.getProjectById();
            })
    }

    // $scope.getLoggedInUser();
    $scope.getProjectById();
})