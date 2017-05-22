app.factory('HelloWorld', ['$resource', function($resource){
    return {
        Coffees: function(){
            return $resource('/coffees/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            });
        },
        Customers: function(){
            return $resource('/customers/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            });
        }
    };
}]);

/*app.factory('Coffee', ['$resource', function($resource){
    return $resource('/coffees/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
}]); 

app.factory('Customer', ['$resource', function($resource){
    alert('in customer');
    return $resource('/customers/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
}]); */