app.directive('topnav', function() {
    return {
        Restrict: 'E',
        templateUrl: './views/components/topnav.html',
        controller: function($scope, $location) {
            scope.logout = () => {
                window.location.replace('/auth/logout/?fullUrl=' + $location.$$absUrl)
            }
        },
        link: function(scope, elem, attrs) {
            scope.toggleBurger = () => {
                console.log("Toggling!")
                let burgerIcon = document.getElementById('burger');
                burgerIcon.classList.toggle('is-active');
                let navMenu = document.getElementById('navMenu');
                navMenu.classList.toggle('is-active')
            };
        }
    }
})