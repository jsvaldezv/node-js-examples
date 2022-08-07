const express = require('express');
const app = express();

const PORT = 8080;

app.listen(PORT, () => console.log(`Port: ${PORT}`));

app.get("/", (req, res) => {
	res.send("Home")
})