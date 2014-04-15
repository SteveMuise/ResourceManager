app.controller('ResourcesController', function ($scope, resourcesService) {

    init();
    function init() {
        $scope.resources = resourcesService.getResources();
    }
    $scope.insertResource = function () {
        var firstName = $scope.newResource.firstName;
        var lastName = $scope.newResource.lastName;
        var role = $scope.newResource.role;
        resourcesService.insertResource(firstName, lastName, role);
        $scope.newResource.firstName = '';
        $scope.newResource.lastName = '';
        $scope.newResource.role = '';
    };
    $scope.deleteResource = function (id) {
        resourcesService.deleteResource(id);
    };
    $scope.toggleInputForm = function() {
        if ($scope.showInputForm != true) {
            $scope.showInputForm = true;
        }
        else
            $scope.showInputForm = false;
    };
    $scope.togglePerfChart = function(){
      if ($scope.showPerfChart != true) {
          $scope.showPerfChart = true;
      }
        else {
          $scope.showPerfChart = false;
      }
  };

});

app.controller('ResourceProjectsController', function ($scope, $routeParams, resourcesService) {
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

app.controller('ProjectsController', function ($scope, projectsService) {
    $scope.projects = [];
    init();
    function init() {
        $scope.projects = projectsService.getProjects();
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

app.controller('ProjectResourcesController', function ($scope, projectsService) {
    $scope.projects = [];
    init();
    function init() {
        $scope.projects = projectsService.getProjects();
    }
});
