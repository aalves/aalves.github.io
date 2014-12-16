(function() {

    var MainCtrl = function($scope, github){

        var onError = function(reason){
            $scope.error = "Error fetching projects information";
        };

        var onUserComplete = function(data){
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data){
            $scope.repos = data;
        };

        github.getUser("aalves").then(onUserComplete, onError);
    };

    angular.module('app').controller('MainCtrl', ['$scope', 'github',MainCtrl]);
}());
