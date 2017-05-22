app.factory('CoffeeAdmin', ['$resource', function($resource){
    return $resource('/coffees/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
}]); 

app.factory('CustomerAdmin', ['$resource', function($resource){
    return $resource('/customers/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
}]); 

app.factory('Coffees', function ($http, apis) {

    var getCoffees = () => {
        return $http({
            method: 'GET',
            url: apis.getCoffees
        }).then((res) => {
            return res;
        },
        (err) => {
            return err;
        });
    };

    var createCoffee = (coffee) => {
        return $http({
            method: 'POST',
            url: apis.createCoffee,
            data: coffee
        }).then((res) => {
            return res;
        },
        (err) => {
            return err;
        });
    };

    return {
        getCoffees: getCoffees,
        createCoffee: createCoffee
    }
});

app.factory('UploadFile', function ($http, apis, Upload) {

    var uploadCoffeeImg = (file) => {
        return Upload.upload({
            url: apis.uploadCoffeeImg,
            data: {
                file: file
            }
        });
    };

    return {
        uploadCoffeeImg: uploadCoffeeImg
    }
});