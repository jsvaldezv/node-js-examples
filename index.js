const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

// const products = require("./Products/products")

class Contenedor
{
	constructor(inFilePath)
	{
		this.filePath = inFilePath;
	}

	async save(inProduct)
	{
		try 
		{
			const fileContent = await fs.promises.readFile(this.filePath, 'utf8');
			let fileObject = eval('(' + fileContent + ')');

			const newObject = {	title: inProduct.title, 
				price: inProduct.price, 
				thumbnail: inProduct.thumbnail, 
				id: fileObject.length + 1 };

			fileObject.push(newObject);
			await fs.promises.writeFile(this.filePath, JSON.stringify(fileObject), err => "");

			return fileObject.length + 1;
		}

		catch (error)
		{
			return error;
		}
	}

	async getById(inID)
	{
		try
		{
			const fileContent = await fs.promises.readFile(this.filePath, 'utf8');
			let fileObject = eval('(' + fileContent + ')');
	  
			let result = fileObject.find(product => product.id === inID);

			if (result === undefined)
				return null
			else
				return result;
		}

		catch (error)
		{
			console.log("Error:", error);
			return null;
		}
	}

	async getAll()
	{
		try
		{
			const fileContent = await fs.promises.readFile(this.filePath, 'utf8');
			let fileObject = eval('(' + fileContent + ')');
			return fileObject;
		}

		catch (error)
		{
			return error;
		}

	}

	async deleteById(inID)
	{
		try
		{
			const fileContent = await fs.promises.readFile(this.filePath, 'utf8');
			let fileObject = eval('(' + fileContent + ')');
	
			const index = fileObject.findIndex(product => product.id === inID);
			if (index > -1)
				fileObject.splice(index, 1);
	
			await fs.promises.writeFile(this.filePath, JSON.stringify(fileObject), err => ""); 
		}

		catch (error)
		{
			console.log(error)
		}
	}

	async deleteAll()
	{
		try
		{
			await fs.promises.writeFile(this.filePath, "[]", err => "");
		}

		catch (error)
		{
			console.log(error)
		}
	}
}

app.listen(PORT, () => console.log(`Port: ${PORT}`));

app.get("/", (req, res) => {
	res.send("Home");
})

app.get("/productos", (req, res) => {
	let cont = new Contenedor("./productos.txt");
	cont.getAll().then(result => res.send(result));
})

app.get("/productoRandom", (req, res) => {
	function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	let randomIndex = randomInteger(1,3);
	let cont = new Contenedor("./productos.txt");

	cont.getById(randomIndex).then(result => res.send(result));
})