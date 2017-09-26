app.controller('homeCtrl', function($scope, $location, homeSrvc) {
    console.log($location.$$absUrl);
    // console.log("HE'LLO WORLD AND ALL WHO INHABIT IT")
    // $scope.hello = 'hello';
    $scope.getLoggedUser = () => {
        homeSrvc.getLoggedUser().then(user => {
            if (user.data == "not logged in!") {
                $scope.getProjects();
            } else {
                $scope.curUser = Object.assign({}, user.data);
                console.log($scope.curUser);
                $scope.getProjects();
            }
        });
    };

    $scope.getLoggedUser();
})