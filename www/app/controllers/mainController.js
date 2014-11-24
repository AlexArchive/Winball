app.controller('mainController', function($scope, $http) {

    function themesAvailable(themes) {
        $scope.themes = themes;
    };
    
    function httpError(data, status, headers, config) {
        console.log('HTTP Error ' + status + ': ' + data);
    }

    $http.get('app/db/themes.json')
        .success(themesAvailable)
        .error(httpError);
});