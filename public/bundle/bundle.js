'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

var app = angular.module("charityApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    }).state('accountDev', {
        url: '/account/dev/:id',
        templateUrl: '../public/views/accountDev/accountDev.html',
        controller: 'accountDevCtrl'
    }).state('accountNonProfit', {
        url: '/account/org/:id',
        templateUrl: '../public/views/accountNonProfit/accountNonProfit.html',
        controller: 'accountNonProfitCtrl'
    }).state('createAccount', {
        url: '/sign-up',
        templateUrl: '../public/views/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('createProject', {
        url: '/new-project',
        templateUrl: '../public/views/createProject/createProject.html',
        controller: 'createProjectCtrl'
    }).state('devProjectApplication', {
        url: '/apply/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('messenger', {
        url: '/messenger',
        templateUrl: '../public/views/messenger/messenger.html',
        controller: 'messengerCtrl'
    }).state('projectFeed', {
        url: '/projectfeed',
        templateUrl: '../public/views//projectFeed/projectFeed.html',
        controller: 'projectFeedCtrl'
    }).state('projectPublicDetails', {
        url: '/projectfeed/project/:id',
        templateUrl: '../public/views/devProjectApplication/devProjectApplication.html',
        controller: 'devProjectApplicationCtrl'
    }).state('workingProject', {
        url: '/active/project/:id',
        templateUrl: '../public/views/workingProject/workingProject.html',
        controller: 'messengerCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
//# sourceMappingURL=bundle.js.map
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
"use strict";

app.controller('accountDevCtrl', function ($scope) {
    console.log("accountDev link");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('accountNonProfitCtrl', function ($scope) {
    console.log("accountNonProfitCtrl");
});
'use strict';

app.service('accountDevSrvc', function ($http) {});
"use strict";

app.controller('createAccountCtrl', function ($scope) {
    console.log("createAccountCtrl");
});
'use strict';

app.service('accountNonProfitSrvc', function ($http) {});
"use strict";

app.controller('devProjectApplicationCtrl', function ($scope) {
    console.log("devProjectApplicationCtrl");
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {});
"use strict";

app.controller('createProjectCtrl', function ($scope) {
    console.log("createProjectCtrl");
});
'use strict';

app.service('createProjectSrvc', function ($http) {});
'use strict';

app.service('messangerSrvc', function ($http) {});
"use strict";

app.controller('messengerCtrl', function ($scope) {
    console.log("messengerCtrl");
});
"use strict";

app.controller('projectFeedCtrl', function ($scope) {
    console.log("projectFeedCtrl");
});
'use strict';

app.service('projectFeedSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope) {
    console.log("HE'LLO WORLD AND ALL WHO INHABIT IT");
    $scope.hello = 'testing';
});
'use strict';

app.service('homeSrvc', function ($http) {});
"use strict";

app.controller('workingProjectCtrl', function ($scope) {
    console.log("workingProjectCtrl");
});
'use strict';

app.service('workingProjectSrvc', function ($http) {});
"use strict";

app.controller('projectPublicDetailsCtrl', function ($scope) {
    console.log("projectPublicDetailsCtrl");
});
'use strict';

app.service('projectPublicDetailsSrvc', function ($http) {});
//# sourceMappingURL=bundle.js.map
