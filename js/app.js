(function(){
    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider){

        $routeProvider
            .when("/", {
                templateUrl: "./templates/main.html",
                controller: "MainCtrl"
            })
            .when("/projects", {
                templateUrl: "templates/projects.html",
                controller: "MainCtrl"
            })
            .when("/about", {
                templateUrl: "templates/about.html",
                controller: "MainCtrl"
            })
            .otherwise({redirectTo:"/"});
    });

}());
