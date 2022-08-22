// En lo personal prefiero pug ya que se me hizo super intuitivo y todo el codigo correspondiente lo logre hacer bastante
// rapido, lo que no me paso con ejs, ya que con ejs muchas veces llegue a ver muy confuso el codigo.

const express = require('express');
const app = express();
const productsRoutes = require("./routes/productsRoutes")
const path = require('path');
const port = 3000 || process.env.PORT;

app.set("views", "./views");

// app.set("view engine", "ejs");
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({extendend:true}));

app.use("/productos", productsRoutes);

const server = app.listen(port, () => { console.log(`Listen in port ${port}`) })

server.on("error", err => { console.log(err) });