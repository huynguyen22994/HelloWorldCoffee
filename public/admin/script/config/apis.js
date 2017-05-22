app.service('apis', function(config) {
    this.getCoffees = config.baseUrl + '/api/coffees';
    this.createCoffee = config.baseUrl + '/api/coffees';
    this.uploadCoffeeImg = config.baseUrl + '/api/coffee/upload';
});