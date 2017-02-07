/*app.controller('coffeeCtrl', function($scope, $http){
    $http.get('/coffees').then(function(res){
        console.log('I got it');
        $scope.coffees = res.data;
    });
});*/

app.controller('coffeeCtrl', function($scope, Coffee){
    $scope.show = true;
    $scope.popup = true;
    refresh = function(){
        var coffees = Coffee.query(function(){
            $scope.coffees = coffees;
            $scope.show = false;
        });
    }
    refresh()
    $scope.detail = function(coffeeid){
        $scope.oneCoffee = Coffee.get({id: coffeeid});
        $scope.popup = false;
    };

    $scope.clear = function(){
        $scope.oneCoffee = null;
    };
    
});