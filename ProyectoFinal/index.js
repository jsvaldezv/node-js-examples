const express = require ('express');
const app = express();
const PORT = 8080;

const indexRouter = require ("./routers/productosRouter")
const carritoRouter = require ("./routers/carritoRouter")

app.use (express.urlencoded({extendend: true}));
app.use (express.json());
app.use ("/api/productos", indexRouter);
app.use ("/api/carrito", carritoRouter);

app.set ('json spaces', 2);

app.listen (PORT, () => console.log (`Port: ${PORT}`)).on("error", (error) => console.log(error));

app.get ("/", (req, res) => {
	res.sendFile (__dirname + "/public/index.html")
	// res.send ("Home");
})