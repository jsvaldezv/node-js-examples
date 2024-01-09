const express = require('express');
const router = express.Router();

let carritos = 	[
	{ 	
		id: 1, 
		timestamp: Date.now(), 
		productos: { 	id: 1, 
			 	 		timestamp: Date.now(), 
			 	 		nombre:"Producto", 
			 	 		descripcion: "Descripcion",
			 	 		codigo: "",
			 	 		foto:"",
			 	 		precio:20,
			 	 		stock: 2 }
	},
	{ 	
		id: 2, 
		timestamp: Date.now(), 
		productos: { 	id: 1, 
			 	 		timestamp: Date.now(), 
			 	 		nombre:"Producto", 
			 	 		descripcion: "Descripcion",
			 	 		codigo: "",
			 	 		foto:"",
			 	 		precio:20,
			 	 		stock: 2 }
	}
];

router.get ("/", (req, res) => 
{
	res.send (carritos);
})

router.post ("/", (req, res) => 
{
	const newCart = { ...req.body, id:products.length+1 };
	carritos = [...carritos, newCart];
	res.send ({ id: newCart.id })
})

router.delete ("/:id", (req, res) => 
{
	const cartId = req.params.id;
	const index = carritos.findIndex (cart => cart.id === parseInt(cartId));

	if (index > -1)
	{
		carritos.splice (index, 1);
		res.send ({id: "Producto con id " + productId + " borrado"})
	}
})

router.get ("/:id/productos", (req, res) => 
{
	const cartId = req.params.id;
	const cartRequired = carritos.find (cart => cart.id === parseInt(cartId))
	res.send (cartRequired)
})

router.post ("/:id/productos", (req, res) => 
{
	const cartId = req.params.id;
	const index = carritos.findIndex (cart => cart.id === parseInt(cartId));

	const newProduct = { ...req.body};
	carritos[index].productos = [...carritos[index].productos, newProduct];
	res.send ({ id: newProduct.id })
})

router.delete ("/:id/productos/:id_prod", (req, res) => 
{
	const cartId = req.params.id;
	const index = carritos.findIndex (cart => cart.id === parseInt(cartId));

	if (index > -1)
	{
		carritos.splice (index, 1);
		res.send ({id: "Producto con id " + productId + " borrado"})
	}
})

module.exports = router;