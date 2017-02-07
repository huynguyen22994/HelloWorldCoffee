app.factory('Coffee', ['$resource', function($resource){
    return $resource('/coffees/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
}]); 