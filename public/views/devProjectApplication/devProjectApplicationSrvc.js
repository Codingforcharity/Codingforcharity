app.service('devProjectApplicationSrvc', function($http) {
    this.getLoggedUser = () => {
        return $http({
            method: "Get",
            url: '/me'
        })
    }

    this.getProject = (param) => {
        return $http({
            method: "Get",
            url: '/api/project/' + param
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