var Products = require('../models/model')
module.exports = {
    allProducts: function(req, res){
        console.log("here are the products")
        Products.find().then(data => res.json(data)).catch(err => res.json(err))
    },
    oneProducts: function(req, res){
        Products.findOne({_id: req.params.id}).then(data => res.json(data)).catch(err => res.json(err))
    },
    createProducts: function(req, res){
        console.log("I am in Create ")
        console.log(req.body)
        Products.create({name: req.body.name, qty: req.body.qty, price: req.body.price }).then(data => res.json(data)).catch(err=> res.json(err))
    },
    updateProducts: function(req, res){
        Products.findOneAndUpdate({_id:req.params.id}, req.body).then(data => res.json(data)).catch(err=> res.json(err))
    },
    deleteProducts: function(req, res){
        Products.deleteOne({_id:req.params.id}).then(data => res.json(data)).catch(err => res.json(err))
    }
}