const express = require('express')
const {Server:HttpServer} = require('http')
const {Server:IOServer} = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

let products = [
    { name:"Ruler", price:"40", photo:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Draw_book.png" },
    { name:"Eraser", price:"5", photo:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Draw_book.png" },
    { name:"Book", price:"100", photo:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Draw_book.png" }
]

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile ('./index.html',{root:__dirname})
})

const server = httpServer.listen(8080, () => { 
    console.log (`El servidor está escuchando por el puerto 8080`);
})

server.on('error',(err)=>{
    console.log (err);
})

io.on('connection', (socket) => 
{
    console.log('Se conecto un cliente');

    // Send
    socket.emit ('products', products);

    socket.on('new-product', (data) => 
	{
        products = [...products, data];
        io.sockets.emit ('products', products);
    })
    
})