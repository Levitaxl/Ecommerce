'use strict';
const {Cart}=require('../models/Cart.js')

class CartController{

	registerAProduct(req,res){
		const productId=req.params.id
		const cart= new Cart()

		cart.registerAProduct(req.user.id,productId,1)
		.then(function(){res.status(200).json('successful cart product registration')})
		.catch(e => console.error(e.stack))
	}

	getAllProductsFromACart(req,res){
		const cart= new Cart()

		cart.getAllProductsFromACart(req.user.id)
		.then(function(cart){res.send({cart:cart})})
		.catch(e => console.error(e.stack))
	}

	getPermissionToAddToCart(req,res){
		const cart= new Cart()

		cart.getPermissionToAddToCart(req.user.id,req.params.productId)
		.then(function(permission){res.send({permission:permission})})
		.catch(e => console.error(e.stack))
	}

	increaseTheQuantityOfTheProduct(req,res){
		const cart= new Cart()

		cart.increaseTheQuantityOfTheProduct(req.params.productId,req.user.id)
		.then(function(){res.status(200).json('successful increase the quantity')})
		.catch(e => console.error(e.stack))
	}

	decreaseTheQuantityOfTheProduct(req,res){
		const cart= new Cart()

		cart.decreaseTheQuantityOfTheProduct(req.params.productId,req.user.id)
		.then(function(){res.status(200).json('successful increase the quantity')})
		.catch(e => console.error(e.stack))
	}

	removeAProductFromTheCart(req,res){
		const cart= new Cart()

		cart.removeAProductFromTheCart(req.params.productId,req.user.id)
		.then(function(){res.status(200).json('successful increase the quantity')})
		.catch(e => console.error(e.stack))
	}
}

module.exports={CartController}
