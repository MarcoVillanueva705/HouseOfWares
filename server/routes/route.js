module.exports = function(app){
    var controller = require('../controllers/controller');
        app.get('/api/products', controller.allProducts);
        app.get('/api/products/:id', controller.oneProducts);
        app.post('/api/products/new', function(req, res){
            console.log(req.body);
            controller.createProducts(req, res)
        });
        app.put('/api/products/update/:id', controller.updateProducts);
        app.delete('/api/products/delete/:id', controller.deleteProducts);
    }