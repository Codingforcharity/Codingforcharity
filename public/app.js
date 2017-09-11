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
                templateUrl: '../public/views/accountDev/accountDev.html',
                controller: 'accountDevCtrl',
            })
            .state('accountNonProfit', {
                url: '/account/org/:id',
                templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
                controller: 'accountNonProfitCtrl',
            })
            .state('createAccount', {
                url: '/sign-up',
                templateUrl: '../public/views/createAccount/createAccount.html',
                controller: 'createAccountCtrl',
            })
            .state('createProject', {
                url: '/new-project',
                templateUrl: '../public/views/createProject/createProject.html',
                controller: 'createProjectCtrl',
            })
            .state('devProjectApplication', {
                url: '/apply/:id',
                templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
                controller: 'devProjectApplicationCtrl',
            })
            .state('messenger', {
                url: '/messenger',
                templateUrl: '../public/views/messenger/messenger.html',
                controller: 'messengerCtrl',
            })
            .state('projectFeed', {
                url: '/projectfeed',
                templateUrl: '../public/views//projectFeed/projectFeed.html',
                controller: 'projectFeedCtrl',
            })
            .state('projectPublicDetails', {
                url: '/projectfeed/project/:id',
                templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
                controller: 'devProjectApplicationCtrl',
            })
            .state('workingProject', {
                url: '/active/project/:id',
                templateUrl: '../public/views/workingProject/workingProject.html',
                controller: 'messengerCtrl',
            })
        $urlRouterProvider.otherwise('/')
    })
