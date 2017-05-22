app.controller('CoffeeAdminCtrl', function($scope, CoffeeAdmin, $timeout, Coffees, UploadFile, config){

    $scope.isImgName = false;
    $scope.isUpload = false;
    $scope.newCoffee = {};
    $scope.canAdd = false;

    $scope.initialization = () => {
        $scope.loadCoffees();
    };

    $scope.loadCoffees = () => {
        Coffees.getCoffees().then((res) => {
            $scope.coffees = res.data.coffees;
        }, (err) => {
            console.log(err);
        })
    };
    
    $scope.createCoffee = () => {
        if ($scope.newCoffee) {
            Coffees.createCoffee($scope.newCoffee)
                .then((res) => {
                    $scope.loadCoffees();
                }, (err) => {

                });
        } else {

        }
    };

    $scope.$watch('files', function () {
        if ($scope.files) {
            $scope.isImgName = true;
        }
    });
    
    $scope.uploadImg = () => {
        $scope.isUpload = true;
        $scope.upload($scope.files);
    };

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                    UploadFile.uploadCoffeeImg(file)
                        .then(function (resp) {
                            $scope.newCoffee.originalImg = resp.data.filename;
                            $scope.newCoffee.linkImg = resp.data.path;
                            $scope.realImgLink = config.uploadUrl + $scope.newCoffee.linkImg;
                            $scope.canAdd = true;
                            // $timeout(function() {
                            //     $scope.log = 'file: ' +
                            //     resp.config.data.file.name + ', Response: ' + JSON.stringify(resp.data) + '\n' + $scope.log;
                            // });
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


    //$scope.show = true;
    // $scope.oneCoffee = '';
    // $scope.popup = true;
    // refresh = function(){
    //     var coffees = CoffeeAdmin.query(function(){
    //         $scope.coffees = coffees;
    //         //$scope.show = false;
    //     });
    // }
    // refresh()
    // $scope.detailAdmin = function(coffeeid){
    //     $scope.oneCoffee = CoffeeAdmin.get({id: coffeeid}, function(){

    //     });
    //     //$scope.popup = false;
    // };

    // $scope.updateCoffee = function(coffeeid){
    //     $scope.coffee = CoffeeAdmin.get({id: coffeeid}, function(){
    //         $scope.coffee.name = $scope.oneCoffee.name;
    //         $scope.coffee.price = $scope.oneCoffee.price;
    //         $scope.coffee.img = $scope.oneCoffee.img;
    //         $scope.coffee.discribe = $scope.oneCoffee.discribe;       
    //         $scope.coffee.$update(function(){
    //             refresh();
    //         });
    //     });
    // };

    // $scope.addCoffee = function(){
    //     $scope.addCoffee = new CoffeeAdmin();
    //     $scope.addCoffee.name = $scope.newCoffee.name;
    //     $scope.addCoffee.price = $scope.newCoffee.price;
    //     $scope.addCoffee.img = "/img/coffees/" + $scope.imgName;
    //     $scope.addCoffee.discribe = $scope.newCoffee.discribe;
    //     CoffeeAdmin.save($scope.addCoffee, function(){
    //         $scope.newCoffee.name = null;
    //         $scope.newCoffee.price = null;
    //         $scope.imgName = '';
    //         $scope.linkImg = '';
    //         $scope.newCoffee.discribe = null;
    //         $scope.process = 0;
    //         refresh();
    //     });
    // };

    // $scope.deleteCoffee = function(coffeeid){
    //     $scope.coffee = CoffeeAdmin.get({id: coffeeid}, function(){
    //         $scope.coffee.id = coffeeid;
    //         $scope.coffee.$delete(function(){
    //             refresh();
    //         });
    //     });
    // };

    // //$scope.clear = function(){
    // //    $scope.oneCoffee = null;
    // //};



    // $scope.log = '';
    // $scope.process = 0;

});