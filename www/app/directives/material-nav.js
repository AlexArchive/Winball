app.directive('materialNav', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).sideNav();
        }
    };
});