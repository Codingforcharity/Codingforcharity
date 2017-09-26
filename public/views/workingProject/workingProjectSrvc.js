app.service('workingProjectSrvc', function($http) {

    this.getContributers = (param) => {
        return $http({
            method: "Get",
            url: "/api/project/" + param + "/contributors",
        })
    }

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

    this.postTodo = (param, todo) => {
        return $http({
            method: "Post",
            url: "/api/project/" + param + "/todos",
            data: {
                todo: todo
            }
        })
    }

    this.getTodos = (param) => {
        return $http({
            method: "Get",
            url: "/api/project/" + param + "/todos",
        })
    }

    this.deleteTodo = (todo, projectid) => {
        return $http({
            method: "Delete",
            url: "/api/project/" + projectid + "/todos/" + todo,
        })
    }

    this.getLinks = (param) => {
        return $http({
            method: "Get",
            url: "/api/project/" + param + "/links"
        })
    }

    this.postLink = (linkname, linkurl, param) => {
        return $http({
            method: "Post",
            url: "/api/project/" + param + "/links",
            data: {
                linkname: linkname,
                linkurl: linkurl
            }
        })
    }

    this.getComments = (param) => {
        return $http({
            method: "Get",
            url: "/api/project/" + param + "/comments",
        })
    }

    this.postComment = (param, comment, userid) => {
        console.log("posting comment")
        return $http({
            method: "Post",
            url: "/api/project/" + param + "/comments",
            data: {
                comment: comment,
                userid: userid,
            }
        })
    }
    this.postReply = (param, comment, reply, userid) => {
        return $http({
            method: "Post",
            url: '/api/project/' + param + '/reply',
            data: {
                comment: comment,
                reply: reply,
                userid: userid,
            }
        })
    }
    this.getUserById = (param) => {
        return $http({
            method: "Get",
            url: '/api/user/' + param
        })
    }
})