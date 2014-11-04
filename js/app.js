(function() {

    var app = angular.module("app", []);

    var GitHubCtrl = function($scope, $http){

        var onError = function(reason){
              $scope.error = "Error fetching projects information";
          };

        var onUserComplete = function(response){
            $scope.user = response.data;
            $http.get($scope.user.repos_url).then(onRepos, onError);
        };

        var onRepos = function(response){
            $scope.repos = response.data;
        };

        $http.get("https://api.github.com/users/aalves").then(onUserComplete, onError);
    };

    app.controller("GitHubCtrl", ["$scope", "$http", GitHubCtrl]);

}());
