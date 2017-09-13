app.service('accountDevSrvc', function($http) {
    this.getLoggedInUser = () => {
        return $http({
            method: 'Get',
            url: '/me'
        })
    }
    this.getUserByParams = (param) => {
        return $http({
            method: 'Get',
            url: '/api/user/' + param,
        })
    }
})