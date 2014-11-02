(function() {

    var app = angular.module("app", []);

    var GitHubCtrl = function($scope, $http){
        var onUserComplete = function(response){
            $scope.user = response.data;
        };

        var onError = function(reason){
          $scope.error = "Error fetching the user";
        };

      $http.get("https://api.github.com/users/aalves").then(onUserComplete);
    };

    app.controller("GitHubCtrl", ["$scope", "$http", GitHubCtrl]);

}());
