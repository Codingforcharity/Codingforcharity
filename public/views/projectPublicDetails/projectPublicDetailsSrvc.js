app.service('projectPublicDetailsSrvc', function($http) {

    this.getProjectById = (param) => {
        return $http({
            method: "Get",
            url: "/api/project/" + param,
        })
    }

    this.getLoggedInUser = () => {
        return $http({
            method: "Get",
            url: "/me",
        })
    }

})