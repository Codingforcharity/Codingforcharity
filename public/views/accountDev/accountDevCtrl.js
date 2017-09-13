app.controller('accountDevCtrl', function($scope, $stateParams, accountDevSrvc) {
    console.log("accountDev link")
    $scope.curUser;
    $scope.ownPage = false;
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
                    console.log(user.data);
                })
        } else {
            $scope.ownPage = true;
            console.log("On your own page!")
        }
    }
    $scope.getLoggedInUser();
})