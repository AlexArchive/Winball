app.controller("themeController", function($scope, $routeParams, $http) {
    var theme = $routeParams.themeName;
    $http.get("app/_db/" + theme + "/" + theme + ".json").success(function(response) {
        $scope.theme = response;
        console.log(response);
    });
});