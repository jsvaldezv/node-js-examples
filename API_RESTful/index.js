const express = require('express');
const app = express();
const PORT = 8080;
const indexRouter = require("./routers/indexRouter")

app.use(express.urlencoded({extendend: true}));
app.use(express.json());
app.use("/api/productos", indexRouter);

app.listen(PORT, () => console.log(`Port: ${PORT}`));

app.get("/", (req, res) => {
	res.json({mensaje: "Home"});
})