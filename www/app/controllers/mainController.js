app.controller('mainController', function($scope, $http) {

    function themesAvailable(themes) {
        $scope.themes = themes;
    };

    $http.get('app/db/themes.json')
        .success(themesAvailable);
});