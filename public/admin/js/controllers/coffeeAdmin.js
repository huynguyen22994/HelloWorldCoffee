app.controller('CoffeeAdminCtrl', function($scope, CoffeeAdmin){
    //$scope.show = true;
    $scope.oneCoffee = '';
    $scope.popup = true;
    refresh = function(){
        var coffees = CoffeeAdmin.query(function(){
            $scope.coffees = coffees;
            //$scope.show = false;
        });
    }
    refresh()
    $scope.detailAdmin = function(coffeeid){
        $scope.oneCoffee = CoffeeAdmin.get({id: coffeeid}, function(){

        });
        //$scope.popup = false;
    };

    $scope.updateCoffee = function(coffeeid){
        $scope.coffee = CoffeeAdmin.get({id: coffeeid}, function(){
            $scope.coffee.name = $scope.oneCoffee.name;
            $scope.coffee.price = $scope.oneCoffee.price;
            $scope.coffee.img = $scope.oneCoffee.img;
            $scope.coffee.discribe = $scope.oneCoffee.discribe;       
            $scope.coffee.$update(function(){
                refresh();
            });
        });
    };

    $scope.addCoffee = function(){
        console.log($scope.newCoffee.img);
        $scope.addCoffee = new CoffeeAdmin();
        $scope.addCoffee.name = $scope.newCoffee.name;
        $scope.addCoffee.price = $scope.newCoffee.price;
        $scope.addCoffee.img = "/img/coffees/capuchino.jpg";
        $scope.addCoffee.discribe = $scope.newCoffee.discribe;
        CoffeeAdmin.save($scope.addCoffee, function(){
            alert('add success');
            refresh();
        });
    };

    $scope.deleteCoffee = function(coffeeid){
        $scope.coffee = CoffeeAdmin.get({id: coffeeid}, function(){
            $scope.coffee.id = coffeeid;
            $scope.coffee.$delete(function(){
                refresh();
            });
        });
    };

    //$scope.clear = function(){
    //    $scope.oneCoffee = null;
    //};

});