app.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true).hashPrefix('');
    $routeProvider
        .when("/",{
        templateUrl:"views/index-home.html"
        }).when("/mobiles",{
            templateUrl:"views/electronics/mobiles.html"
        })
        .when("/tablets",{
            templateUrl:"views/electronics/tablets.html"
        })
        .when("/leds",{
            templateUrl:"views/electronics/led.html"
        })
        .when("/jeans",{
            templateUrl:"views/clothing/jeans.html"
        })
        .when("/formal shoes",{
            templateUrl:"views/footwear/formal shoes.html"
        })
        .when("/casual shoes",{
            templateUrl:"views/footwear/casual shoes.html"
        })
        .when("/shirts",{
            templateUrl:"views/clothing/shirts.html"
        })
        .when("/sports shoes",{
            templateUrl:"views/footwear/sports shoes.html"
        })
        .when("/t-shirts",{
            templateUrl:"views/clothing/t-shirts.html"
        })
        .when("/electronics",{
            templateUrl:"views/electronics.html"
        })
        .when("/clothing",{
            templateUrl:"views/clothing.html"
        })
        .when("/footwear",{
            templateUrl:"views/footwear.html"
        }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});