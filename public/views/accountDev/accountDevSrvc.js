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

    this.getProjectsById = (param) => {
        return $http({
            method: "Get",
            url: "/api/user/" + param + "/projects",
        })
    }

    this.getCommentsById = (param) => {
        return $http({
            method: "Get",
            url: "/api/user/" + param + "/comments",
        })
    }

    this.submitComment = (param, comment, userid) => {
        return $http({
            method: "Post",
            url: "/api/user/" + param + "/comments",
            data: {
                comment: comment,
                userid: userid
            }
        })
    }

    this.submitReply = (param, commentid, reply, userid) => {
        return $http({
            method: "Post",
            url: "/api/user/" + param + "/replies",
            data: {
                commentid: commentid,
                reply: reply,
                userid: userid
            }
        })
    }
})