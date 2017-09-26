app.service('projectFeedSrvc', function($http) {
    this.getLoggedUser = () => {
        return $http({
            method: 'Get',
            url: '/me',
        })
    }

    this.getProjects = () => {
        return $http({
            method: "Get",
            url: "/api/projects",
        })
    }

    this.getUserById = (param) => {
        return $http({
            method: 'Get',
            url: "/api/user/" + param
        })
    }

})