app.service('homeSrvc', function($http) {
    this.getLoggedUser = () => {
        return $http({
            method: 'Get',
            url: '/me',
        })
    }
})