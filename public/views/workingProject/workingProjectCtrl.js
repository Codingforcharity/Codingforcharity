app.controller('workingProjectCtrl', function($scope, $stateParams, workingProjectSrvc) {

    $scope.curUser;

    $scope.submitReply = (comment, reply) => {
        console.log('replying to: ', comment, reply);
        workingProjectSrvc.postReply($stateParams.id, comment, reply, $scope.curUser.id)
            .then((comments) => {
                console.log('Reply Posted: ', comments)
                $scope.comments = comments.data;
            })
    }

    $scope.submitComment = (comment) => {
        console.log("commenting");
        workingProjectSrvc.postComment($stateParams.id, comment, $scope.curUser.id)
            .then((comments) => {
                $scope.comments = comments.data;
            })
    }

    $scope.getComments = () => {
        console.log("Getting Comments");
        workingProjectSrvc.getComments($stateParams.id)
            .then((comments) => {
                $scope.comments = comments.data;
            })
    }

    $scope.getLinks = () => {
        // console.log("Getting links")
        workingProjectSrvc.getLinks($stateParams.id)
            .then((links) => {
                $scope.links = links.data;
                console.log($scope.links)
            })
    }

    $scope.getTodos = () => {
        workingProjectSrvc.getTodos($stateParams.id)
            .then((todos) => {
                $scope.todos = todos.data;
                // console.log($scope.todos)
            })
    }

    $scope.getContributers = () => {
        workingProjectSrvc.getContributers($stateParams.id)
            .then((users) => {
                $scope.contributers = users.data;
                $scope.contributers.map((user) => {
                    if (user.id === $scope.curUser.id) {
                        $scope.allowedAccess = true;
                        $scope.getTodos();
                        $scope.getLinks();
                        $scope.getComments();
                    }
                })
            })
    }

    $scope.getProjectById = () => {
        const param = $stateParams.id;
        workingProjectSrvc.getProjectById(param)
            .then((project) => {
                $scope.project = Object.assign({}, project.data[0]);
                $scope.getContributers();
            })

    }

    $scope.getLoggedUser = () => {
        workingProjectSrvc.getLoggedInUser()
            .then((user) => {
                $scope.curUser = Object.assign({}, user.data);
                $scope.getProjectById();
            })
    }

    $scope.submitTodo = (todo) => {
        if (todo != "") {
            // console.log("submiting: " + todo)
            workingProjectSrvc.postTodo($stateParams.id, todo)
                .then((todos) => {
                    // console.log(todos);
                    $scope.todos = todos.data;
                })
        }
    }

    $scope.deleteTodo = (todo) => {
        if (todo) {
            // console.log("Deleting: " + todo.todo);
            workingProjectSrvc.deleteTodo(todo.id, $stateParams.id)
                .then((todos) => {
                    // console.log(todos);
                    $scope.todos = todos.data;
                })
        }
    }

    $scope.submitLink = (linkName, linkUrl) => {
        $scope.ValidURL = (str) => {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if (!regex.test(str)) {
                alert("Please enter valid URL.");
                return false;
            } else {
                return true;
            }
        }


        $scope.isValid = $scope.ValidURL(linkUrl);
        if (linkName && linkUrl && $scope.isValid) {
            workingProjectSrvc.postLink(linkName, linkUrl, $stateParams.id)
                .then((links) => {
                    $scope.links = links.data;
                })
        }
    }

    $scope.getLoggedUser();

})