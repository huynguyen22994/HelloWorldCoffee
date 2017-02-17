app.controller('CoffeeAdminCtrl', function($scope, CoffeeAdmin, Upload, $timeout){
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
        $scope.addCoffee = new CoffeeAdmin();
        $scope.addCoffee.name = $scope.newCoffee.name;
        $scope.addCoffee.price = $scope.newCoffee.price;
        $scope.addCoffee.img = "/img/coffees/" + $scope.imgName;
        $scope.addCoffee.discribe = $scope.newCoffee.discribe;
        CoffeeAdmin.save($scope.addCoffee, function(){
            $scope.newCoffee.name = null;
            $scope.newCoffee.price = null;
            $scope.imgName = '';
            $scope.linkImg = '';
            $scope.newCoffee.discribe = null;
            $scope.process = 0;
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

    $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });
    $scope.$watch('file', function () {
            if ($scope.file != null) {
                $scope.files = [$scope.file]; 
            }
        });

    $scope.log = '';
    $scope.process = 0;

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/coffees',
                    data: {
                      username: $scope.username,
                      file: file  
                    }
                }).then(function (resp) {
                    $scope.imgName = resp.config.data.file.name,
                    $timeout(function() {
                        $scope.log = 'file: ' +
                        resp.config.data.file.name + ', Response: ' + JSON.stringify(resp.data) + '\n' + $scope.log;
                        console.log(resp);
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.process = progressPercentage;
                    $scope.linkImg = "/img/coffees/" + evt.config.data.file.name;
                    $scope.log = 'progress: ' + progressPercentage + '% ' + evt.config.data.file.name + '\n' + $scope.log;
                    console.log(evt.config.data.file);
                });
              }
            }
        }
    };

});