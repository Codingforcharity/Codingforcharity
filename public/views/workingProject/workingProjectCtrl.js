app.controller('workingProjectCtrl', function($scope, $stateParams, workingProjectSrvc) {

    $scope.curUser;

    $scope.getLinks = () => {
        workingProjectSrvc.getLinks($stateParams.id)
            .then((links) => {
                $scope.links = links.data;
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
        if (linkName && linkUrl) {
            workingProjectSrvc.postLink(linkName, linkUrl, $stateParams.id)
                .then((links) => {
                    $scope.links = links.data;
                })
        }
    }

    $scope.getLoggedUser();

})