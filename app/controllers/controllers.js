app.controller('ResourcesController', function ($scope, resourcesService) {

    init();
    function init() {
        $scope.resources = resourcesService.getResources();
    }

    $scope.insertResource = function () {
        var firstName = $scope.newResource.firstName;
        var lastName = $scope.newResource.lastName;
        var city = $scope.newResource.city;
        resourcesService.insertResource(firstName, lastName, city);
        $scope.newResource.firstName = '';
        $scope.newResource.lastName = '';
        $scope.newResource.city = '';
    };

    $scope.deleteResource = function (id) {
        resourcesService.deleteResource(id);
    };
    $scope.showInputForm = $scope.showInputForm;
    $scope.toggleInputFormButton = "Show";
    $scope.toggleInputForm = function() {
        if ($scope.showInputForm != true) {
            $scope.showInputForm = true;
            $scope.toggleInputFormButton = "Hide";
        }
        else
        {
            $scope.showInputForm = false;
            $scope.toggleInputFormButton = "Show";
        }
    };
});

app.controller('CustomerOrdersController', function ($scope, $routeParams, resourcesService) {
    $scope.resource = {};
    $scope.ordersTotal = 0.00;

    init();
    function init() {
        //Grab customerID off of the route        
        var resourceID = ($routeParams.resourceID) ? parseInt($routeParams.resourceID) : 0;
        if (resourceID > 0) {
            $scope.resource = resourcesService.getResource(resourceID);
        }
    }

});

app.controller('OrdersController', function ($scope, resourcesService) {
    $scope.resources = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.resources = resourcesService.getResources();
    }
});

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

app.controller('OrderChildController', function ($scope) {
    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.resource && $scope.resource.orders) {
            var total = 0.00;
            for (var i = 0; i < $scope.resource.orders.length; i++) {
                var order = $scope.resource.orders[i];
                total += order.orderTotal;
            }
            $scope.ordersTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});
