app.controller("mainController", function($scope, $http) {
    $http.get('app/_db/themes.json').success(function(response) {
        $scope.themes = response;
    });
});