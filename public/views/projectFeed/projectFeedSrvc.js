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

    this.submitApplication = (project, user, email, message) => {
        console.log("EMAIL: ", email)
        return $http({
            method: "Post",
            url: '/api/apply/' + project.projid,
            data: {
                project: project,
                user: user,
                message: message,
                email: email
            }
        })
    }

})