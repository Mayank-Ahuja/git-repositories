/*nav-controllers*/

app.controller("menuCtrl", function ($scope, menuService) {
    var promise = menuService.object.getMenu();
    console.log("call Starts....");
    promise.then(function (response) {
        var menuItems = response.data;
        $scope.menus = menuItems;
        console.log("menuItems: ", menuItems.length);
        $scope.menuwidth = {
            "width": 100 / menuItems.length + "%"
        };
    }, function (error) {
        $scope.menus = error;
    })
});

app.controller("quickLinkCtrl", function ($scope, quickLinksService) {
    var promise = quickLinksService.object.getMenu();
    console.log("call Starts....");
    promise.then(function (response) {
        $scope.quickMenu = response.data;
    }, function (error) {
        $scope.menus = error;
    })
});

/*mobiles page controller*/
app.controller("mobileCtrl", function ($scope, mobileService) {
    var step = 3;
    $scope.increase = step;
    $scope.more = function () {
        $scope.increase += 3;
    }
    $scope.loadMobile = function () {
        var promise = mobileService.object.getMobileJson();
        console.log("mobiles data called");

        function success(response) {
            $scope.result = response.data;
        }

        function error(error) {
            $scope.result = error;
        }
        promise.then(success, error);
    }
});
