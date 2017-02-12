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