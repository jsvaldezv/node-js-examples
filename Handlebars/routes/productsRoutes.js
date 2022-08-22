const express = require('express');
const router = express.Router();

let listaProductos = [
	{ 
		title: "TV",
		price: 4678,
		img: "https://m.media-amazon.com/images/I/61DQCQUJtoL._AC_SX679_.jpg"
	},
	{ 
		title: "Razer Kraken X Lite",
		price: 432,
		img: "https://m.media-amazon.com/images/I/61QIMDB3YTL._AC_SX522_.jpg"
	},
	{ 
		title: "Apple 13 pulgadas MacBook Air",
		price: 10699,
		img: "https://m.media-amazon.com/images/I/91wYB53Y4aL._AC_SX522_.jpg"
	}
]

router.get("/mostrarProductos", (req, res) => {
	res.render("productos.pug", { productos: listaProductos });
	// res.render("productos", { productos: listaProductos });
})

router.get("/agregarProducto", (req, res) => {
	// res.render("agregarProducto");
	res.render("agregarProducto.pug");
})

router.post("/", (req, res) => {
	let datos = req.body;
	listaProductos = [...listaProductos, datos];
	res.redirect("/productos/agregarProducto");
})

module.exports = router;