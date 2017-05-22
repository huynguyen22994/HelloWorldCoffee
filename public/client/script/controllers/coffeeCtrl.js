app.controller('coffeeCtrl', function($scope, HelloWorld){
    $scope.show = true;
    $scope.popup = true;
    refresh = function(){
        var coffees = HelloWorld.Coffees().query(function(){
            $scope.coffees = coffees;
            $scope.show = false;
        });
    }
    refresh()
    $scope.detail = function(coffeeid){
        $scope.oneCoffee = HelloWorld.Coffees().get({id: coffeeid});
        $scope.popup = false;
    };

    $scope.clear = function(){
        $scope.oneCoffee = null;
    };
    
});