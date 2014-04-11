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
        .when('/customerorders/:resourceID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/ResourceManager/app/partials/customerOrders.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: '/ResourceManager/app/partials/orders.html'
            })
        .otherwise({ redirectTo: '/resources' });
});




