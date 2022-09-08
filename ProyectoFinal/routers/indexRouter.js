const express = require('express');
const router = express.Router();

let products = [{	title:"Pera", 
					price:2, 
					thumbnail:"https://www.pngmart.com/files/16/Organic-Green-Pears-PNG-File.png", 
					id:1 }];

router.get ("/", (req, res) => {
	res.send (products);
})

module.exports = router;