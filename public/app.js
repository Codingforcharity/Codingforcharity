const app = angular.module("charityApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home/home.html',
                controller: 'homeCtrl',
            })
            .state('accountDev', {
                url: '/account/dev/:id',
                templateUrl: './views/accountDev/accountDev.html',
                controller: 'accountDevCtrl',
            })
            .state('accountNonProfit', {
                url: '/account/org/:id',
                templateUrl: './views/accountNonProfit/accountNonProfit.html',
                controller: 'accountNonProfitCtrl',
            })
            .state('createAccount', {
                url: '/sign-up',
                templateUrl: './views/createAccount/createAccount.html',
                controller: 'createAccountCtrl',
            })
            .state('createProject', {
                url: '/new-project',
                templateUrl: './views/createProject/createProject.html',
                controller: 'createProjectCtrl',
            })
            .state('devProjectApplication', {
                url: '/apply/:id',
                templateUrl: './views/devProjectApplication/devProjectApplication.html',
                controller: 'devProjectApplicationCtrl',
            })
            .state('messenger', {
                url: '/messenger',
                templateUrl: './views/messenger/messenger.html',
                controller: 'messengerCtrl',
            })
            .state('projectFeed', {
                url: '/projectfeed',
                templateUrl: './views/projectFeed/projectFeed.html',
                controller: 'projectFeedCtrl',
            })
            .state('projectPublicDetails', {
                url: '/projectfeed/project/:id',
                templateUrl: './views/devProjectApplication/devProjectApplication.html',
                controller: 'devProjectApplicationCtrl',
            })
            .state('workingProject', {
                url: '/active/project/:id',
                templateUrl: './views/workingProject/workingProject.html',
                controller: 'workingProjectCtrl',
            })
            .state('login', {
                url: '/login',
                templateUrl: './views/login/login.html',
                controller: 'loginCtrl'
              })
        $urlRouterProvider.otherwise('/')
    })
