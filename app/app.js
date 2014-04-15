var app = angular.module('resourcesApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/resources',
            {
                controller: 'ResourcesController',
                templateUrl: '/ResourceManager/app/partials/Resources.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/resourceprojects/:resourceID',
            {
                controller: 'ResourceProjectsController',
                templateUrl: '/ResourceManager/app/partials/ResourceProjects.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/projects',
            {
                controller: 'ProjectsController',
                templateUrl: '/ResourceManager/app/partials/Projects.html'
            })
        .when('/projectresources/:projectID',
            {
                controller: 'ProjectResourcesController',
                templateUrl: '/ProjectResources.html'
            })
        .otherwise({ redirectTo: '/resources' });
});

