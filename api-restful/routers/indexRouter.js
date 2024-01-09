const express = require('express');
const router = express.Router();

let products = [{	title:"Pera", 
					price:2, 
					thumbnail:"https://www.pngmart.com/files/16/Organic-Green-Pears-PNG-File.png", 
					id:1}];

router.get("/", (req, res) => {
	res.send(products);
})

router.get("/:id", (req, res) => {
	let productRequired = products.find(product => product.id === parseInt(req.params.id));

	if (productRequired === undefined)
		res.send({error: "Producto no encontrado"})
	else
		res.send(productRequired);
})

router.post("/", (req, res) => {
	const newProduct = {...req.body, id:products.length+1};
	products = [...products, newProduct];
	res.send({id: newProduct.id})
})

router.put("/:id", (req, res) => {
	const newProductId = req.params.id;

	let productRequired = products.find((product, i) => {
		if (product.id === parseInt(newProductId)) 
		{
			products[i] = {	title: req.body.title, 
							price: req.body.price, 
							thumbnail: req.body.thumbnail, 
							id: product.id };
			return true;
		}
	});

	if (productRequired === undefined)
		res.send({error: "Producto no encontrado"})
	else
		res.send({id: "Producto con id " + newProductId + " actualizado"})
})

router.delete("/:id", (req, res) => {
	const productId = req.params.id;

	const index = products.findIndex(product => product.id === parseInt(productId));

	if (index > -1)
	{
		products.splice(index, 1);
		res.send({id: "Producto con id " + productId + " borrado"})
	}	

	else
		res.send({error: "Producto no encontrado"})
})

module.exports = router;