"use strict";

var app = angular.module("charityApp", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "./views/home/home.html",
    controller: "homeCtrl"
  }).state("accountDev", {
    url: "/account/:id",
    // pass in later as a parameter//  /:id',
    templateUrl: "./views/accountDev/accountDev.html",
    controller: "accountDevCtrl"
  }).state("accountNonProfit", {
    url: "/account/org/:id",
    templateUrl: "./views/accountNonProfit/accountNonProfit.html",
    controller: "accountNonProfitCtrl"
  }).state("createAccount", {
    url: "/sign-up",
    templateUrl: "./views/createAccount/createAccount.html",
    controller: "createAccountCtrl"
  }).state("createProject", {
    url: "/new-project",
    templateUrl: "./views/createProject/createProject.html",
    controller: "createProjectCtrl"
  }).state("devProjectApplication", {
    url: "/apply/:id",
    // pass in later to add parameter to the url // :id',
    templateUrl: "./views/devProjectApplication/devProjectApplication.html",
    controller: "devProjectApplicationCtrl"
  }).state("messenger", {
    url: "/messenger",
    templateUrl: "./views/messenger/messenger.html",
    controller: "messengerCtrl"
  }).state("projectFeed", {
    url: "/projectfeed",
    templateUrl: "./views/projectFeed/projectFeed.html",
    controller: "projectFeedCtrl"
  }).state("projectPublicDetails", {
    url: "/projectfeed/project/:id",
    templateUrl: "./views/projectPublicDetails/projectPublicDetails.html",
    controller: "projectPublicDetailCtrl"
  }).state("workingProject", {
    url: "/active/project/:id",
    templateUrl: "./views/workingProject/workingProject.html",
    controller: "workingProjectCtrl"
  }).state("login", {
    url: "/login",
    templateUrl: "./views/login/login.html",
    controller: "loginCtrl"
  });
  $urlRouterProvider.otherwise("/");
});
// "use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   // Dropdowns

//   var $metalinks = getAll("#meta a");

//   if ($metalinks.length > 0) {
//     $metalinks.forEach(function ($el) {
//       $el.addEventListener("click", function (event) {
//         event.preventDefault();
//         var target = $el.getAttribute("href");
//         var $target = document.getElementById(target.substring(1));
//         $target.scrollIntoView(true);
//         // window.history.replaceState(null, document.title, `${window.location.origin}${window.location.pathname}${target}`);
//         return false;
//       });
//     });
//   }

//   // Dropdowns

//   var $dropdowns = getAll(".dropdown:not(.is-hoverable)");

//   if ($dropdowns.length > 0) {
//     $dropdowns.forEach(function ($el) {
//       $el.addEventListener("click", function (event) {
//         event.stopPropagation();
//         $el.classList.toggle("is-active");
//       });
//     });

//     document.addEventListener("click", function (event) {
//       closeDropdowns();
//     });
//   }

//   function closeDropdowns() {
//     $dropdowns.forEach(function ($el) {
//       $el.classList.remove("is-active");
//     });
//   }

//   // Toggles

//   var $burgers = getAll(".burger");

//   if ($burgers.length > 0) {
//     $burgers.forEach(function ($el) {
//       $el.addEventListener("click", function () {
//         var target = $el.dataset.target;
//         var $target = document.getElementById(target);
//         $el.classList.toggle("is-active");
//         $target.classList.toggle("is-active");
//       });
//     });
//   }

//   // Modals

//   var $html = document.documentElement;
//   var $modals = getAll(".modal");
//   var $modalButtons = getAll(".modal-button");
//   var $modalCloses = getAll(
//     ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
//   );

//   if ($modalButtons.length > 0) {
//     $modalButtons.forEach(function ($el) {
//       $el.addEventListener("click", function () {
//         var target = $el.dataset.target;
//         var $target = document.getElementById(target);
//         $html.classList.add("is-clipped");
//         $target.classList.add("is-active");
//       });
//     });
//   }

//   if ($modalCloses.length > 0) {
//     $modalCloses.forEach(function ($el) {
//       $el.addEventListener("click", function () {
//         closeModals();
//       });
//     });
//   }

//   document.addEventListener("keydown", function (event) {
//     var e = event || window.event;
//     if (e.keyCode === 27) {
//       closeModals();
//       closeDropdowns();
//     }
//   });

//   function closeModals() {
//     $html.classList.remove("is-clipped");
//     $modals.forEach(function ($el) {
//       $el.classList.remove("is-active");
//     });
//   }

//   // Functions

//   function getAll(selector) {
//     return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
//   }

//   var latestKnownScrollY = 0;
//   var ticking = false;

//   function scrollUpdate() {
//     ticking = false;
//     // do stuff
//   }

//   function onScroll() {
//     latestKnownScrollY = window.scrollY;
//     scrollRequestTick();
//   }

//   function scrollRequestTick() {
//     if (!ticking) {
//       requestAnimationFrame(scrollUpdate);
//     }
//     ticking = true;
//   }

//   window.addEventListener("scroll", onScroll, false);
// });
"use strict";
'use strict';

(function (angular) {
    "use strict";
    // Source: src/bulma.module.js

    (function () {

        angular.module('bulma', ['bulma.modal', 'bulma.progress', 'bulma.tabs', 'bulma.toast']);
    })();
    // Source: src/modal/modal.module.js
    (function () {

        angular.module('bulma.modal', []);
    })();
    // Source: src/progress/progress.module.js
    (function () {

        angular.module('bulma.progress', []);
    })();
    // Source: src/tabs/tab/tab.module.js
    (function () {

        angular.module('bulma.tabs.tab', []);
    })();
    // Source: src/tabs/tabs.module.js
    (function () {

        angular.module('bulma.tabs', ['bulma.tabs.tab']);
    })();
    // Source: src/toast/toast.module.js
    (function () {

        angular.module('bulma.toast', []);
    })();
    // Source: src/bulma.component.js
    (function () {

        angular.module('bulma').component('bulma', {
            templateUrl: 'src/bulma.html',
            controller: 'bulmaController as vm'
        });
    })();
    // Source: src/bulma.controller.js
    (function () {

        angular.module('bulma').controller('bulmaController', bulmaController);

        bulmaController.$inject = ['bulma'];

        /**
         * @param {Bulma} bulma
         */
        function bulmaController(bulma) {
            var vm = this;
            vm.modals = bulma.modals;
            vm.toasts = bulma.toasts;
        }
    })();
    // Source: src/bulma.service.js
    (function () {

        angular.module('bulma').service('bulma', service);

        service.$inject = ['$q', '$templateRequest', 'BulmaModal', 'BulmaModalCollection', 'BulmaToast', 'BulmaToastCollection'];

        /**
         * @type {Object}
         */
        var configuration = {
            toast: {
                position: 'bl'
            }
        };

        /**
         * Service container
         * @param $q
         * @param $templateRequest
         * @param BulmaModal
         * @param BulmaModalCollection
         * @param BulmaToast
         * @param BulmaToastCollection
         * @returns {Bulma}
         */
        function service($q, $templateRequest, BulmaModal, BulmaModalCollection, BulmaToast, BulmaToastCollection) {

            Bulma.prototype.modal = modal;
            Bulma.prototype.toast = toast;
            Bulma.prototype.configure = configure;

            return new Bulma();

            /**
             * Main bulma object
             * @constructor
             */
            function Bulma() {
                this.modals = new BulmaModalCollection();
                this.toasts = new BulmaToastCollection();
                this.configuration = configuration;
            }

            /**
             * Opens a bulma modal window
             * @param options
             * @returns {$q.promise}
             * @public
             */
            function modal(options) {
                var $this = this;
                return $q(function (resolve, reject) {
                    var modal = new BulmaModal(prepareModalOptions(options));
                    options.modals = $this.modals;

                    if (options.template) {
                        $this.modals.push(modal);
                        resolve(modal);
                    } else {
                        $templateRequest(options.templateUrl).then(function (template) {
                            options.template = template;
                            $this.modals.push(modal);
                            resolve(modal);
                        }).catch(reject);
                    }
                });
            }

            /**
             * Creates new toast
             * @param options
             * @returns {$q.promise}
             * @public
             */
            function toast(options) {
                var $this = this;
                return $q(function (resolve) {
                    var toast = new BulmaToast(prepareToastOptions(options));
                    options.toasts = $this.toasts;
                    $this.toasts.push(toast);
                    resolve(toast);
                });
            }

            /**
             * Prepare modal options
             * @param {Object} options
             * @returns {Object}
             * @private
             */
            function prepareModalOptions(options) {
                options = options || {};
                options.template = options.template || null;
                options.templateUrl = options.templateUrl || null;
                options.controller = options.controller || null;
                options.controllerAs = options.controllerAs || null;
                options.classes = options.classes || {};

                if (options.template === null && options.templateUrl === null) {
                    throw new Error('bulma.modal expects a template or templateUrl');
                }

                if (options.controller === null) {
                    throw new Error('bulma.modal must have a controller');
                }

                return options;
            }

            /**
             * Prepare toast options
             * @param {Object} options
             * @returns {Object}
             * @private
             */
            function prepareToastOptions(options) {
                options = options || {};
                options.closeButton = options.closeButton || null;
                options.type = options.type || 'primary';
                options.contents = options.contents || '';
                options.timeout = options.timeout || null;

                if (options.closeButton === null) {
                    options.closeButton = true;
                }

                if (options.timeout === null) {
                    options.timeout = false;
                }

                return options;
            }

            /**
             * Configure bulma
             * @param {String} section
             * @param {Object} config
             */
            function configure(section, config) {
                angular.forEach(config, function (value, key) {
                    configuration[section][key] = value;
                });
            }
        }
    })();
    // Source: src/modal/modal.component.js
    (function () {

        angular.module('bulma.modal').component('bulmaModal', {
            bindings: {
                modal: '='
            },
            templateUrl: 'src/modal/modal.html',
            controller: 'bulmaModalController as vm'
        }).component('bulmaModals', {
            transclude: true,
            template: '<ng-transclude></ng-transclude>'
        });
    })();
    // Source: src/modal/modal.controller.js
    (function () {

        angular.module('bulma.modal').controller('bulmaModalController', bulmaModalController);

        bulmaModalController.$inject = ['$scope', '$controller', '$compile', '$element'];

        /**
         * bulmaModalController
         * @param $scope
         * @param $controller
         * @param $compile
         * @param $element
         */
        function bulmaModalController($scope, $controller, $compile, $element) {
            var vm = this;
            var scope = $scope.$new(true, $scope);

            activate();

            /**
             * activate
             */
            function activate() {
                var controller = $controller(vm.modal.getOption('controller'), {
                    $scope: scope,
                    bulmaModal: vm.modal,
                    bindToController: true
                }, true, vm.modal.getOption('controllerAs'));

                vm.classes = vm.modal.classes = angular.merge({
                    'is-active': vm.modal.visible
                }, vm.modal.getOption('classes'));

                $element.children(0).data('$ngControllerController', controller()).html(vm.modal.getOption('template'));

                $compile($element.contents())(scope);
            }
        }
    })();
    // Source: src/modal/modal.model.js
    (function () {

        angular.module('bulma.modal').constant('BulmaModal', BulmaModal).constant('BulmaModalCollection', BulmaModalCollection);

        BulmaModal.prototype.destroy = destroy;
        BulmaModal.prototype.show = show;
        BulmaModal.prototype.hide = hide;

        BulmaModalCollection.prototype = [];
        BulmaModalCollection.prototype.findModal = findModal;
        BulmaModalCollection.prototype.removeModal = removeModal;

        /**
         * BulmaModal
         * @param {Object} options
         * @constructor
         */
        function BulmaModal(options) {
            this.visible = false;
            this.getOption = getOption;

            /**
             * Returns a modal option
             * @param {String} option
             * @returns {*}
             * @public
             */
            function getOption(option) {
                if (option in options) {
                    return options[option];
                }
                return undefined;
            }
        }

        /**
         * BulmaModalCollection
         * @constructor
         * @extends {Array}
         */
        function BulmaModalCollection() {}

        /**
         * Destroy the modal
         * @returns {Boolean}
         * @public
         */
        function destroy() {
            return this.getOption('modals').removeModal(this);
        }

        /**
         * Show the modal
         * @returns {BulmaModal}
         * @public
         */
        function show() {
            this.visible = true;
            return this;
        }

        /**
         * Hide the modal
         * @returns {BulmaModal}
         * @public
         */
        function hide() {
            this.visible = false;
            return this;
        }

        /**
         * Returns modal index in collection, -1 if modal not found
         * @param {BulmaModal} modal
         * @returns {Number}
         * @public
         */
        function findModal(modal) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === modal) {
                    return i;
                }
            }
            return -1;
        }

        /**
         * Remove a modal from collection
         * @param {BulmaModal} modal
         * @returns {Boolean}
         * @public
         */
        function removeModal(modal) {
            var index = this.findModal(modal);
            if (index !== -1) {
                this.splice(index, 1);
            }
            return false;
        }
    })();
    // Source: src/progress/progress.component.js
    (function () {

        angular.module('bulma.progress').component('bulmaProgress', {
            bindings: {
                value: '=',
                max: '=',
                size: '=',
                color: '='
            },
            templateUrl: 'src/progress/progress.html',
            controller: 'bulmaProgressController as vm'
        });
    })();
    // Source: src/progress/progress.controller.js
    (function () {

        angular.module('bulma.progress').controller('bulmaProgressController', bulmaProgressController);

        bulmaProgressController.$inject = [];

        function bulmaProgressController() {
            var vm = this;
            vm.classes = {
                // Colors
                'is-primary': vm.color == 'primary',
                'is-info': vm.color == 'info',
                'is-success': vm.color == 'success',
                'is-warning': vm.color == 'warning',
                'is-danger': vm.color == 'danger',

                // Sizes
                'is-small': vm.size == 'small',
                'is-medium': vm.size == 'medium',
                'is-large': vm.size == 'large'
            };
        }
    })();
    // Source: src/tabs/tab/tab.component.js
    (function () {

        angular.module('bulma.tabs.tab').component('bulmaTab', {
            templateUrl: 'src/tabs/tab/tab.html',
            controller: 'bulmaTabsTabController as vm',
            transclude: true,
            bindings: {
                title: '@',
                icon: '@?'
            },
            require: {
                tabsCtrl: '^bulmaTabs'
            }
        });
    })();
    // Source: src/tabs/tab/tab.controller.js
    (function () {

        angular.module('bulma.tabs.tab').controller('bulmaTabsTabController', bulmaTabsTabController);

        bulmaTabsTabController.$inject = [];

        /**
         * bulmaTabsTabController
         */
        function bulmaTabsTabController() {
            var vm = this;
            vm.$onInit = onInit;

            /**
             * Initialize
             */
            function onInit() {
                vm.tabsCtrl.add(this);
            }
        }
    })();
    // Source: src/tabs/tabs.component.js
    (function () {

        angular.module('bulma.tabs').component('bulmaTabs', {
            bindings: {
                class: '@?'
            },
            templateUrl: 'src/tabs/tabs.html',
            controller: 'bulmaTabsController as vm',
            transclude: true
        });
    })();
    // Source: src/tabs/tabs.controller.js
    (function () {

        angular.module('bulma.tabs').controller('bulmaTabsController', bulmaTabsController);

        bulmaTabsController.$inject = [];

        /**
         * bulmaTabsController
         */
        function bulmaTabsController() {
            var vm = this;
            vm.tabs = [];
            vm.class = vm.class || '';
            vm.select = select;
            vm.add = add;

            /**
             * Mark a tab as selected
             * @param tab
             */
            function select(tab) {
                angular.forEach(vm.tabs, function (tab) {
                    tab.selected = false;
                });
                tab.selected = true;
            }

            /**
             * Add a tab
             * @param tab
             */
            function add(tab) {
                if (vm.tabs.length === 0) {
                    select(tab);
                }
                vm.tabs.push(tab);
            }
        }
    })();
    // Source: src/toast/toast.component.js
    (function () {

        angular.module('bulma.toast').component('bulmaToast', {
            bindings: {
                toast: '=',
                inline: '=?'
            },
            templateUrl: 'src/toast/toast.html',
            controller: 'bulmaToastController as vm'
        }).component('bulmaToasts', {
            transclude: true,
            template: '<ng-transclude></ng-transclude>',
            controller: 'bulmaToastsController as vm'
        });
    })();
    // Source: src/toast/toast.controller.js
    (function () {

        angular.module('bulma.toast').controller('bulmaToastController', bulmaToastController).controller('bulmaToastsController', bulmaToastsController);

        bulmaToastController.$inject = ['$scope', '$sce', '$timeout'];

        /**
         * bulmaToasterController
         * @param $scope
         * @param $sce
         * @param $timeout
         */
        function bulmaToastController($scope, $sce, $timeout) {
            var vm = this;
            var style = vm.toast.getOption('type');
            var timeout = vm.toast.getOption('timeout');
            vm.close = close;

            activate();

            /**
             * Activate the controller
             */
            function activate() {
                vm.inline = vm.inline !== false;
                vm.showClose = vm.toast.getOption('closeButton');
                vm.contents = $sce.trustAsHtml(vm.toast.getOption('contents'));
                vm.style = style !== null ? 'is-' + style : '';

                if (typeof timeout === 'number' && timeout > 0) {
                    var tm = $timeout(function () {
                        vm.toast.destroy();
                    }, timeout);
                    $scope.$on('$destroy', function () {
                        $timeout.cancel(tm);
                    });
                }
            }

            /**
             * Close (destroy) the toast
             */
            function close() {
                vm.toast.destroy();
            }
        }

        bulmaToastsController.$inject = ['$element', 'bulma'];

        function bulmaToastsController($element, bulma) {
            $element.removeClass('p-lt p-rt p-lb p-rb').addClass('p-' + bulma.configuration.toast.position);
        }
    })();
    // Source: src/toast/toast.model.js
    (function () {

        angular.module('bulma.toast').constant('BulmaToast', BulmaToast).constant('BulmaToastCollection', BulmaToastCollection);

        BulmaToast.prototype.destroy = destroy;

        BulmaToastCollection.prototype = [];
        BulmaToastCollection.prototype.findToast = findToast;
        BulmaToastCollection.prototype.removeToast = removeToast;

        /**
         * @param {Object} options
         * @constructor
         */
        function BulmaToast(options) {
            this.getOption = getOption;

            /**
             * Returns a toast option
             * @param {String} option
             * @returns {*}
             * @public
             */
            function getOption(option) {
                if (option in options) {
                    return options[option];
                }
                return undefined;
            }
        }

        /**
         * @constructor
         */
        function BulmaToastCollection() {}

        function destroy() {
            this.getOption('toasts').removeToast(this);
        }

        /**
         * Returns modal index in collection, -1 if modal not found
         * @param {BulmaToast} toast
         * @returns {Number}
         * @public
         */
        function findToast(toast) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === toast) {
                    return i;
                }
            }
            return -1;
        }

        /**
         * Remove a modal from collection
         * @param {BulmaToast} toast
         * @returns {Boolean}
         * @public
         */
        function removeToast(toast) {
            var index = this.findToast(toast);
            if (index !== -1) {
                this.splice(index, 1);
            }
            return false;
        }
    })();
})(angular);
(function () {

    'use strict';

    angular.module('bulma').run(run);

    run.$inject = ['$templateCache'];

    function run($templateCache) {
        'use strict';

        $templateCache.put('src/bulma.html', "<bulma-modals><bulma-modal ng-repeat=\"modal in vm.modals\" modal=\"modal\"></bulma-modal></bulma-modals><bulma-toasts><bulma-toast ng-repeat=\"toast in vm.toasts\" toast=\"toast\"></bulma-toast></bulma-toasts>");

        $templateCache.put('src/modal/modal.html', "<div class=\"modal\" ng-class=\"vm.classes\"></div>");

        $templateCache.put('src/progress/progress.html', "<progress class=\"progress is-{{vm.color}}\" value=\"{{vm.value}}\" max=\"{{vm.max}}\">{{vm.value}}%</progress>");

        $templateCache.put('src/tabs/tab/tab.html', "<div ng-show=\"vm.selected\" ng-transclude></div>");

        $templateCache.put('src/tabs/tabs.html', "<div class=\"tabs {{vm.class}}\"><ul><li ng-repeat=\"tab in vm.tabs\" ng-class=\"{'is-active':tab.selected}\"><a ng-click=\"vm.select(tab)\"><span class=\"icon is-small\" ng-if=\"tab.icon\"><i class=\"{{tab.icon}}\"></i></span> <span>{{tab.title}}</span></a></li></ul></div><div class=\"content {{vm.class}}\" ng-transclude></div>");

        $templateCache.put('src/toast/toast.html', "<div class=\"notification {{vm.style}}\" ng-class=\"vm.classes\"><button class=\"delete\" ng-if=\"vm.showClose\" ng-click=\"vm.close()\"></button><div ng-bind-html=\"vm.contents\"></div></div>");
    }
})();
"use strict";

app.controller("accountDevCtrl", function ($scope, $stateParams, accountDevSrvc) {
    // console.log("accountDev link")
    $scope.curUser;
    $scope.ownPage = false;
    $scope.isActive = true;
    $scope.newSkills = "";
    $scope.modalSet = false;
    $scope.showPictures = false;
    $scope.showInfo = false;
    $scope.avatarArr = [];
    $scope.picture = false;
    $scope.showUserInfo = false;

    $scope.changeModal = function (project) {
        console.log("open modal");
        $scope.modal = {
            title: project.title,
            desc: project.description,
            creator: project.username,
            pic: project.profilepic,
            name: project.firstname + " " + project.lastname
        };
        $scope.modalSet = true;
    };

    $scope.submitReply = function (comment, reply) {
        if (comment) {
            if (reply) {
                accountDevSrvc.submitReply($stateParams.id, comment.commentid, reply, $scope.curUser.id).then(function (comments) {
                    console.log(comments);
                    $scope.userComments = comments.data;
                });
            } else {
                console.log("Didnt type anything");
            }
        }
    };

    $scope.submitComment = function (comment) {
        if (comment) {
            accountDevSrvc.submitComment($stateParams.id, comment, $scope.curUser.id).then(function (comments) {
                $scope.userComments = comments.data;
            });
        } else {
            console.log("Didnt type anything");
        }
    };

    $scope.getCommentsById = function () {
        accountDevSrvc.getCommentsById($stateParams.id).then(function (comments) {
            console.log(comments.data);
            $scope.userComments = comments.data;
        });
    };

    $scope.getProjectsById = function () {
        accountDevSrvc.getProjectsById($stateParams.id).then(function (projects) {
            console.log("USERS PROJECTS: ", projects.data);
            $scope.userProjects = projects.data;
            $scope.getCommentsById();
        });
    };

    $scope.getUserSkills = function (id) {
        accountDevSrvc.getUserSkills(id).then(function (skills) {
            // console.log("User Skills: ", skills.data)
            if ($scope.ownPage) {
                $scope.curUser.skills = "";
                for (var i = 0; i < skills.data.length; i++) {
                    if (i == 0) {
                        $scope.curUser.skills += skills.data[i].skill;
                    } else {
                        $scope.curUser.skills += ", " + skills.data[i].skill;
                    }
                }
                $scope.newSkills = $scope.curUser.skills;
                console.log($scope.curUser.skills);
            } else {
                $scope.pageOwner.skills = skills.data;
                console.log($scope.pageOwner.skills);
            }
        });
    };

    $scope.getUpdatedUser = function (userid) {
        accountDevSrvc.getUserById(userid).then(function (user) {
            $scope.curUser = Object.assign({}, user.data[0]);
            $scope.getUserByParams();
            $scope.getProjectsById();
        });
    };

    $scope.getLoggedInUser = function () {
        accountDevSrvc.getLoggedInUser().then(function (user) {
            $scope.curUser = Object.assign({}, user.data);
            $scope.getUpdatedUser($scope.curUser.id);
        });
    };
    $scope.getUserByParams = function () {
        var param = $stateParams.id;
        if ($scope.curUser.id != param) {
            accountDevSrvc.getUserByParams(param).then(function (user) {
                $scope.pageOwner = Object.assign({}, user.data[0]);
                // console.log($scope.pageOwner);
                $scope.getUserSkills($stateParams.id);
                $scope.picture = true;
            });
        } else {
            $scope.ownPage = true;
            $scope.picture = true;
            $scope.newFirstName = $scope.curUser.firstname;
            $scope.newLastName = $scope.curUser.lastname;
            $scope.newBio = $scope.curUser.bio;
            $scope.newProfilePic = $scope.curUser.profilepic;
            // console.log("On your own page!", $scope.curUser)
            $scope.getUserSkills($stateParams.id);
        }
    };

    $scope.subChanges = function (newFirstName, newLastName, newBio, newSkills) {
        var newUser = {};
        if (newFirstName) {
            newUser.firstname = newFirstName;
        } else {
            if ($scope.curUser.firstname) {
                newUser.firstname = $scope.curUser.firstname;
            } else {
                newUser.firstname = undefined;
            }
        }

        if (newLastName) {
            newUser.lastname = newLastName;
        } else {
            if ($scope.curUser.lastname) {
                newUser.lastname = $scope.curUser.lastname;
            } else {
                newUser.lastname = undefined;
            }
        }

        if (newBio) {
            newUser.bio = newBio;
        } else {
            if ($scope.curUser.bio) {
                newUser.bio = $scope.curUser.bio;
            } else {
                newUser.bio = undefined;
            }
        }

        if (newSkills) {
            // console.log(newSkills)
            newSkills = newSkills.split(",");
            for (var i = 0; i < newSkills.length; i++) {
                newSkills[i] = newSkills[i].trim();
            }
            newUser.skills = newSkills;
            console.log(newSkills);
        } else {
            if ($scope.curUser.skills) {
                newUser.skills = $scope.curUser.skills;
            } else {
                newUser.skills = undefined;
            }
        }

        newUser.id = $scope.curUser.id;
        newUser.authid = $scope.curUser.authid;
        newUser.email = $scope.curUser.email;
        newUser.username = $scope.curUser.username;
        newUser.ischarity = $scope.curUser.ischarity;
        newUser.profilepic = $scope.curUser.profilepic;
        accountDevSrvc.updateUser($stateParams.id, newUser).then(function (updatedUser) {
            // console.log("updated user", updatedUser)
            $scope.curUser = updatedUser.data[0];
            // console.log($scope.curUser);
            $scope.getUserSkills($stateParams.id);
        });
    };

    $scope.msgActive = true;
    $scope.changeTab = function (str) {
        var messages = document.getElementById("messages");
        var projects = document.getElementById("projects");

        if (str === "messages") {
            messages.className = "is-active";
            projects.className = "";
            $scope.msgActive = true;
            $scope.projectsActive = false;
        } else if (str === "projects") {
            messages.className = "";
            projects.className = "is-active";
            $scope.msgActive = false;
            $scope.projectsActive = true;
        }
    };

    $scope.changePicture = function () {
        console.log("changing picture");
        $scope.showPictures = true;
    };

    $scope.updateInfo = function () {
        console.log("updating info");
        $scope.showInput = true;
        $scope.showUserInfo = false;
    };

    $scope.cancelInfo = function () {
        console.log("canceling info");
        $scope.showInput = false;
        $scope.showUserInfo = true;
    };

    $scope.updatePicture = function (avatar) {
        // console.log(avatar);

        for (var i = 0; i < 17; i++) {
            if (avatar === "avatar" + i) {
                var imgUrl = "./img/avatars/" + i + ".svg";
                // console.log(imgUrl)
                accountDevSrvc.updateImg($scope.curUser.id, imgUrl).then(function (user) {
                    $scope.curUser = Object.assign({}, user.data[0]);
                    $scope.showPictures = false;
                });
            }
        }
    };

    $scope.subChanges = function (newFirstName, newLastName, newBio, newSkills) {
        var newUser = {};
        if (newFirstName) {
            newUser.firstname = newFirstName;
        } else {
            if ($scope.curUser.firstname) {
                newUser.firstname = $scope.curUser.firstname;
            } else {
                newUser.firstname = undefined;
            }
        }

        if (newLastName) {
            newUser.lastname = newLastName;
        } else {
            if ($scope.curUser.lastname) {
                newUser.lastname = $scope.curUser.lastname;
            } else {
                newUser.lastname = undefined;
            }
        }

        if (newBio) {
            newUser.bio = newBio;
        } else {
            if ($scope.curUser.bio) {
                newUser.bio = $scope.curUser.bio;
            } else {
                newUser.bio = undefined;
            }
        }

        if (newSkills) {
            // console.log(newSkills)
            newSkills = newSkills.split(',');
            for (var i = 0; i < newSkills.length; i++) {
                newSkills[i] = newSkills[i].trim();
            }
            newUser.skills = newSkills;
            console.log(newSkills);
        } else {
            if ($scope.curUser.skills) {
                newUser.skills = $scope.curUser.skills;
            } else {
                newUser.skills = undefined;
            }
        }

        newUser.id = $scope.curUser.id;
        newUser.authid = $scope.curUser.authid;
        newUser.email = $scope.curUser.email;
        newUser.username = $scope.curUser.username;
        newUser.ischarity = $scope.curUser.ischarity;
        newUser.profilepic = $scope.curUser.profilepic;
        accountDevSrvc.updateUser($stateParams.id, newUser).then(function (updatedUser) {
            // console.log("updated user", updatedUser)
            $scope.curUser = updatedUser.data[0];
            // console.log($scope.curUser);
            $scope.getUserSkills($stateParams.id);
        });
    };

    $scope.msgActive = true;
    $scope.changeTab = function (str) {
        var messages = document.getElementById('messages');
        var projects = document.getElementById('projects');

        if (str === 'messages') {
            messages.className = "is-active";
            projects.className = "";
            $scope.msgActive = true;
            $scope.projectsActive = false;
        } else if (str === 'projects') {
            messages.className = "";
            projects.className = "is-active";
            $scope.msgActive = false;
            $scope.projectsActive = true;
        }
    };

    $scope.changePicture = function () {
        console.log('changing picture');
        $scope.showPictures = true;
    };

    $scope.updatePicture = function (avatar) {
        // console.log(avatar);

        for (var i = 0; i < 17; i++) {
            if (avatar === "avatar" + i) {
                var imgUrl = "./img/avatars/" + i + ".svg";
                // console.log(imgUrl)
                accountDevSrvc.updateImg($scope.curUser.id, imgUrl).then(function (user) {
                    $scope.curUser = Object.assign({}, user.data[0]);
                    $scope.showPictures = false;
                });
            }
        }
    };

    $scope.submitApplication = function (message, project) {
        $scope.modalSet = false;
        if ($scope.curUser.id) {
            accountDevSrvc.submitApplication(project, $scope.curUser, project.email, message).then(function () {
                $location.path('/projectfeed');
            });
        } else {
            alert("Please Log in first");
        }
    };

    $scope.getLoggedInUser();
});
'use strict';

app.service('accountDevSrvc', function ($http) {
    this.getLoggedInUser = function () {
        return $http({
            method: 'Get',
            url: '/me'
        });
    };
    this.getUserByParams = function (param) {
        return $http({
            method: 'Get',
            url: '/api/user/' + param
        });
    };
    this.getUserSkills = function (param) {
        return $http({
            method: "Get",
            url: "/api/user/" + param + "/skills"
        });
    };

    this.updateUser = function (param, user) {
        return $http({
            method: "Put",
            url: "/api/user/" + param + "/update",
            data: {
                user: user
            }
        });
    };

    this.getProjectsById = function (param) {
        return $http({
            method: "Get",
            url: "/api/user/" + param + "/projects"
        });
    };

    this.getCommentsById = function (param) {
        return $http({
            method: "Get",
            url: "/api/user/" + param + "/comments"
        });
    };

    this.submitComment = function (param, comment, userid) {
        return $http({
            method: "Post",
            url: "/api/user/" + param + "/comments",
            data: {
                comment: comment,
                userid: userid
            }
        });
    };

    this.submitReply = function (param, commentid, reply, userid) {
        return $http({
            method: "Post",
            url: "/api/user/" + param + "/replies",
            data: {
                commentid: commentid,
                reply: reply,
                userid: userid
            }
        });
    };
    this.updateImg = function (param, imgUrl) {
        return $http({
            method: "Put",
            url: "/api/user/" + param + "/updateImg",
            data: {
                imgUrl: imgUrl
            }
        });
    };

    this.getUserById = function (param) {
        return $http({
            method: "Get",
            url: "/api/user/" + param
        });
    };

    this.submitApplication = function (project, user, email, message) {
        console.log("EMAIL: ", email);
        return $http({
            method: "Post",
            url: '/api/apply/' + project.projid,
            data: {
                project: project,
                user: user,
                message: message,
                email: email
            }
        });
    };
});
'use strict';

app.controller('createAccountCtrl', function ($scope, $location, createAccountSrvc) {
    console.log("createAccountCtrl");
    $scope.logout = function () {
        window.location.replace('/auth/logout/?fullUrl=' + $location.$$absUrl);
    };
});
'use strict';

app.service('createAccountSrvc', function ($http) {});
'use strict';

app.controller('createProjectCtrl', function ($scope, createProjectSrvc, $location) {
    console.log("createProjectCtrl");

    $scope.submitProject = function (title, org, type, desc, terms, skills) {
        console.log(title, org, type, desc, terms, skills);
        if (title) {
            if (type) {
                if (desc) {
                    if (terms) {
                        createProjectSrvc.createProject(title, desc, type, $scope.curUser.id).then(function (project) {
                            console.log(project);
                            $location.path('/projectfeed');
                        });
                    }
                }
            }
        }
    };

    $scope.getLoggedInUser = function () {
        createProjectSrvc.getLoggedInUser().then(function (user) {
            $scope.curUser = Object.assign({}, user.data);
        });
    };

    $scope.getLoggedInUser();
});
"use strict";

app.service('createProjectSrvc', function ($http) {
    this.getLoggedInUser = function () {
        return $http({
            method: "Get",
            url: "/me"
        });
    };
    this.createProject = function (title, desc, skills, userid) {
        return $http({
            method: "Post",
            url: "/api/projects/create/" + userid,
            data: {
                title: title,
                desc: desc,
                skills: skills
            }
        });
    };
});
'use strict';

app.directive('topnav', function () {
    return {
        Restrict: 'E',
        templateUrl: './views/components/topnav.html',
        link: function link(scope, elem, attrs) {
            scope.toggleBurger = function () {
                console.log("Toggling!");
                var burgerIcon = document.getElementById('burger');
                burgerIcon.classList.toggle('is-active');
                var navMenu = document.getElementById('navMenu');
                navMenu.classList.toggle('is-active');
            };
        }
    };
});
'use strict';

app.controller('devProjectApplicationCtrl', function ($scope, devProjectApplicationSrvc, $location, $stateParams) {
    $scope.getProject = function () {
        devProjectApplicationSrvc.getProject($stateParams.id).then(function (project) {
            console.log(project);
            $scope.project = project.data[0];
            console.log("project:", $scope.project);
        });
    };

    $scope.getLoggedUser = function () {
        devProjectApplicationSrvc.getLoggedUser().then(function (user) {
            if (user.data == 'not logged in!') {} else {
                $scope.curUser = Object.assign({}, user.data);
                $scope.newEmail = $scope.curUser.email;
                $scope.newName = $scope.curUser.firstname.trim() + " " + $scope.curUser.lastname.trim();
                console.log($scope.curUser);
                $scope.getProject();
            }
        });
    };

    $scope.submitApplication = function (email, message) {
        if ($scope.curUser.id) {
            $scope.curUser.newName = $scope.newName;
            $scope.curUser.newEmail = email;
            devProjectApplicationSrvc.submitApplication($scope.project, $scope.curUser, $scope.project.email, message).then(function () {
                $location.path('/projectfeed');
            });
        } else {
            alert("Please Log in first");
        }
    };
    $scope.getLoggedUser();
});
'use strict';

app.service('devProjectApplicationSrvc', function ($http) {
    this.getLoggedUser = function () {
        return $http({
            method: "Get",
            url: '/me'
        });
    };

    this.getProject = function (param) {
        return $http({
            method: "Get",
            url: '/api/project/' + param
        });
    };

    this.submitApplication = function (project, user, email, message) {
        console.log("EMAIL: ", email);
        return $http({
            method: "Post",
            url: '/api/apply/' + project.projid,
            data: {
                project: project,
                user: user,
                message: message,
                email: email
            }
        });
    };
});
'use strict';

app.controller('loginCtrl', function ($scope) {});
'use strict';

app.service('loginSrvc', function ($http) {});
'use strict';

app.controller('homeCtrl', function ($scope, $location, homeSrvc) {
    console.log($location.$$absUrl);
    // console.log("HE'LLO WORLD AND ALL WHO INHABIT IT")
    // $scope.hello = 'hello';
    $scope.getLoggedUser = function () {
        homeSrvc.getLoggedUser().then(function (user) {
            $scope.curUser = Object.assign({}, user.data);
            console.log($scope.curUser);
            // $scope.getProjects();
        });
    };

    $scope.getLoggedUser();
});
'use strict';

app.service('homeSrvc', function ($http) {
    this.getLoggedUser = function () {
        return $http({
            method: 'Get',
            url: '/me'
        });
    };
});
'use strict';

app.controller('workingProjectCtrl', function ($scope, $stateParams, workingProjectSrvc) {

    $scope.curUser;
    $scope.msgActive = true;
    $scope.changeTab = function (str) {
        var messages = document.getElementById('messages');
        var projects = document.getElementById('projects');
        var resources = document.getElementById('resources');

        if (str === 'messages') {
            messages.className = "is-active";
            contributors.className = "";
            resources.className = "";
            $scope.msgActive = true;
            $scope.contributorActive = false;
            $scope.linksActive = false;
        } else if (str === 'contributors') {
            messages.className = "";
            contributors.className = "is-active";
            resources.className = "";
            $scope.msgActive = false;
            $scope.contributorActive = true;
            $scope.linksActive = false;
        } else if (str === 'resources') {
            messages.className = "";
            contributors.className = "";
            resources.className = "is-active";
            $scope.msgActive = false;
            $scope.contributorActive = false;
            $scope.linksActive = true;
        }
    };

    $scope.submitReply = function (comment, reply) {
        console.log('replying to: ', comment, reply);
        workingProjectSrvc.postReply($stateParams.id, comment, reply, $scope.curUser.id).then(function (comments) {
            console.log('Reply Posted: ', comments);
            $scope.comments = comments.data;
        });
    };

    $scope.submitComment = function (comment) {
        console.log("commenting");
        workingProjectSrvc.postComment($stateParams.id, comment, $scope.curUser.id).then(function (comments) {
            $scope.comments = comments.data;
        });
    };

    $scope.getComments = function () {
        console.log("Getting Comments");
        workingProjectSrvc.getComments($stateParams.id).then(function (comments) {
            $scope.comments = comments.data;
        });
    };

    $scope.getLinks = function () {
        // console.log("Getting links")
        workingProjectSrvc.getLinks($stateParams.id).then(function (links) {
            $scope.links = links.data;
            console.log($scope.links);
        });
    };

    $scope.getTodos = function () {
        workingProjectSrvc.getTodos($stateParams.id).then(function (todos) {
            $scope.todos = todos.data;
            // console.log($scope.todos)
        });
    };

    $scope.getContributers = function () {
        workingProjectSrvc.getContributers($stateParams.id).then(function (users) {
            $scope.contributers = users.data;
            $scope.contributers.map(function (user) {
                if (user.id === $scope.curUser.id) {
                    $scope.allowedAccess = true;
                    $scope.getTodos();
                    $scope.getLinks();
                    $scope.getComments();
                }
            });
        });
    };

    $scope.getProjectById = function () {
        var param = $stateParams.id;
        workingProjectSrvc.getProjectById(param).then(function (project) {
            $scope.project = Object.assign({}, project.data[0]);
            $scope.getContributers();
        });
    };

    $scope.getUpdatedUser = function (userid) {
        workingProjectSrvc.getUserById(userid).then(function (user) {
            $scope.curUser = Object.assign({}, user.data[0]);
            $scope.getProjectById();
        });
    };

    $scope.getLoggedUser = function () {
        workingProjectSrvc.getLoggedInUser().then(function (user) {
            $scope.curUser = Object.assign({}, user.data);
            $scope.getUpdatedUser($scope.curUser.id);
            // $scope.getProjectById();
        });
    };

    $scope.submitTodo = function (todo) {
        if (todo != "") {
            // console.log("submiting: " + todo)
            workingProjectSrvc.postTodo($stateParams.id, todo).then(function (todos) {
                // console.log(todos);
                $scope.todos = todos.data;
            });
        }
    };

    $scope.deleteTodo = function (todo) {
        if (todo) {
            // console.log("Deleting: " + todo.todo);
            workingProjectSrvc.deleteTodo(todo.id, $stateParams.id).then(function (todos) {
                // console.log(todos);
                $scope.todos = todos.data;
            });
        }
    };

    $scope.submitLink = function (linkName, linkUrl) {
        $scope.ValidURL = function (str) {
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if (!regex.test(str)) {
                alert("Please enter valid URL.");
                return false;
            } else {
                return true;
            }
        };

        $scope.isValid = $scope.ValidURL(linkUrl);
        if (linkName && linkUrl && $scope.isValid) {
            workingProjectSrvc.postLink(linkName, linkUrl, $stateParams.id).then(function (links) {
                $scope.links = links.data;
            });
        }
    };

    $scope.getLoggedUser();
});
"use strict";

app.service('workingProjectSrvc', function ($http) {

    this.getContributers = function (param) {
        return $http({
            method: "Get",
            url: "/api/project/" + param + "/contributors"
        });
    };

    this.getProjectById = function (param) {
        return $http({
            method: "Get",
            url: "/api/project/" + param
        });
    };

    this.getLoggedInUser = function () {
        return $http({
            method: "Get",
            url: "/me"
        });
    };

    this.postTodo = function (param, todo) {
        return $http({
            method: "Post",
            url: "/api/project/" + param + "/todos",
            data: {
                todo: todo
            }
        });
    };

    this.getTodos = function (param) {
        return $http({
            method: "Get",
            url: "/api/project/" + param + "/todos"
        });
    };

    this.deleteTodo = function (todo, projectid) {
        return $http({
            method: "Delete",
            url: "/api/project/" + projectid + "/todos/" + todo
        });
    };

    this.getLinks = function (param) {
        return $http({
            method: "Get",
            url: "/api/project/" + param + "/links"
        });
    };

    this.postLink = function (linkname, linkurl, param) {
        return $http({
            method: "Post",
            url: "/api/project/" + param + "/links",
            data: {
                linkname: linkname,
                linkurl: linkurl
            }
        });
    };

    this.getComments = function (param) {
        return $http({
            method: "Get",
            url: "/api/project/" + param + "/comments"
        });
    };

    this.postComment = function (param, comment, userid) {
        console.log("posting comment");
        return $http({
            method: "Post",
            url: "/api/project/" + param + "/comments",
            data: {
                comment: comment,
                userid: userid
            }
        });
    };
    this.postReply = function (param, comment, reply, userid) {
        return $http({
            method: "Post",
            url: '/api/project/' + param + '/reply',
            data: {
                comment: comment,
                reply: reply,
                userid: userid
            }
        });
    };
    this.getUserById = function (param) {
        return $http({
            method: "Get",
            url: '/api/user/' + param
        });
    };
});
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

app.controller("projectFeedCtrl", function ($scope, projectFeedSrvc) {
    console.log("projectFeedCtrl");
    $scope.curUser;
    $scope.skills = [];
    $scope.filtered = false;
    $scope.originalProjects;
    $scope.projectCount = 0;
    $scope.modalSet = false;
    $scope.searchProjects = function (str) {
        $scope.projects = $scope.originalProjects;
        $scope.projectCount = $scope.projects.length;
        console.log($scope.projects);
        if (str) {
            var newProjects = [];
            for (var i = 0; i < $scope.projects.length; i++) {
                if ($scope.projects[i].title.toLowerCase().includes(str.toLowerCase())) {
                    newProjects.push($scope.projects[i]);
                }
            }
            $scope.projects = newProjects;
            $scope.projectCount = $scope.projects.length;
        } else {
            $scope.getProjects();
        }
    };

    $scope.getProjects = function () {
        $scope.skills = [];
        projectFeedSrvc.getProjects().then(function (projects) {
            console.log(projects.data);
            $scope.filtered = false;
            $scope.projects = [].concat(_toConsumableArray(projects.data));
            $scope.projects.map(function (project) {
                project.skills.map(function (skill) {
                    $scope.skills.push(skill);
                });
                // $scope.projects.showModal = false;
            });
            console.log("ALL SKILLS: ", $scope.skills);
            $scope.skills = $scope.skills.filter(function (item, pos) {
                return $scope.skills.indexOf(item) == pos;
            });
            console.log($scope.skills);
            $scope.originalProjects = $scope.projects;
            $scope.projectCount = $scope.projects.length;
            // console.log("SORTED SKILLS: ", $scope.skills);
            console.log($scope.projects);
        });
    };

    $scope.getUpdatedUser = function (userid) {
        projectFeedSrvc.getUserById(userid).then(function (user) {
            $scope.curUser = Object.assign({}, user.data[0]);
            $scope.getProjects();
        });
    };

    $scope.getLoggedUser = function () {
        projectFeedSrvc.getLoggedUser().then(function (user) {
            if (user.data == "not logged in!") {
                $scope.getProjects();
            } else {
                $scope.curUser = Object.assign({}, user.data);
                console.log($scope.curUser);
                $scope.getUpdatedUser($scope.curUser.id);
            }
        });
    };

    $scope.filter = function (skill) {
        $scope.filtered = true;
        $scope.skills = [skill];
        var newProjects = [];
        $scope.projects.map(function (project) {
            var skillFound = false;
            project.skills.map(function (singleskill) {
                if (singleskill.toLowerCase().trim() == skill.toLowerCase().trim()) {
                    skillFound = true;
                }
            });
            if (skillFound) {
                console.log("FOUND PROJECT");
                newProjects.push(project);
            }
        });
        $scope.projects = newProjects;
        $scope.projectCount = $scope.projects.length;
        console.log($scope.projects);
    };

    $scope.showModal = function (project) {
        $scope.modal = {
            title: project.title,
            desc: project.description,
            creator: project.username,
            pic: project.profilepic,
            name: project.firstname + " " + project.lastname,
            email: project.email,
            id: project.id,
            projid: project.projid

        };
        $scope.modalSet = true;
    };

    $scope.submitApplication = function (message, project) {
        $scope.modalSet = false;
        if ($scope.curUser.id) {
            projectFeedSrvc.submitApplication(project, $scope.curUser, project.email, message).then(function () {
                $location.path('/projectfeed');
            });
        } else {
            alert("Please Log in first");
        }
    };

    $scope.getLoggedUser();
});
'use strict';

app.service('projectFeedSrvc', function ($http) {
    this.getLoggedUser = function () {
        return $http({
            method: 'Get',
            url: '/me'
        });
    };

    this.getProjects = function () {
        return $http({
            method: "Get",
            url: "/api/projects"
        });
    };

    this.getUserById = function (param) {
        return $http({
            method: 'Get',
            url: "/api/user/" + param
        });
    };

    this.submitApplication = function (project, user, email, message) {
        console.log("EMAIL: ", email);
        return $http({
            method: "Post",
            url: '/api/apply/' + project.projid,
            data: {
                project: project,
                user: user,
                message: message,
                email: email
            }
        });
    };
});
"use strict";

app.controller('projectPublicDetailCtrl', function ($scope, $stateParams, projectPublicDetailsSrvc) {
    console.log("projectPublicDetailsCtrl");
    $scope.curUser;
    $scope.getProjectById = function () {
        var param = $stateParams.id;
        console.log("stateparams: " + param);
        projectPublicDetailsSrvc.getProjectById(param).then(function (project) {
            console.log("Returned project: ", project);
            $scope.project = Object.assign({}, project.data[0]);
            console.log("scoped project: ", $scope.project);
        });
    };

    $scope.getLoggedInUser = function () {
        projectPublicDetailsSrvc.getLoggedInUser().then(function (user) {
            $scope.curUser = Object.assign({}, user.data);
            $scope.getProjectById();
        });
    };

    $scope.toggle = function () {
        $scope.state = !$scope.state;
    };

    $scope.getLoggedInUser();
});
"use strict";

app.service('projectPublicDetailsSrvc', function ($http) {

    this.getProjectById = function (param) {
        return $http({
            method: "Get",
            url: "/api/project/" + param
        });
    };

    this.getLoggedInUser = function () {
        return $http({
            method: "Get",
            url: "/me"
        });
    };
});
//# sourceMappingURL=bundle.js.map
