app.controller('createAccountCtrl', function($scope, $location, createAccountSrvc) {
    console.log("createAccountCtrl")
    $scope.logout = function() {
        window.location.replace('/auth/logout/?fullUrl=' + $location.$$absUrl)
    }
})
