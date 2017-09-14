app.service('projectPublicDetailsSrvc', function($http) {

    this.getProjectById = (param) => {
        console.log("PARAM:" + param)
        return $http({
            method: "Get",
            url: "/api/project/" + param,
        })
    }

})