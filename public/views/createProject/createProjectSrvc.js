app.service('createProjectSrvc', function($http) {
    this.getLoggedInUser = () => {
        return $http({
            method: "Get",
            url: "/me"
        })
    }
    this.createProject = (title, desc, skills, userid) => {
        return $http({
            method: "Post",
            url: "/api/projects/create/" + userid,
            data: {
                title: title,
                desc: desc,
                skills: skills,
            }
        })
    }
})