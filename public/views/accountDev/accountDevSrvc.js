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
    this.getUserSkills = (param) => {
        return $http({
            method: "Get",
            url: "/api/user/" + param + "/skills"
        })
    }

    this.updateUser = (param, user) => {
        return $http({
            method: "Put",
            url: "/api/user/" + param + "/update",
            data: {
                user: user
            }
        })
    }
})