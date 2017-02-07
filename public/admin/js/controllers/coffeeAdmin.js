app.controller('CoffeeAdminCtrl', function($scope, CoffeeAdmin){
    //$scope.show = true;
    //$scope.popup = true;
    refresh = function(){
        var coffees = CoffeeAdmin.query(function(){
            console.log(coffees);
            $scope.coffees = coffees;
            //$scope.show = false;
        });
    }
    refresh()
    //$scope.detail = function(coffeeid){
    //    $scope.oneCoffee = Coffee.get({id: coffeeid});
    //    $scope.popup = false;
    //};

    //$scope.clear = function(){
    //    $scope.oneCoffee = null;
    //};

});