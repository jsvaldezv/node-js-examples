const express = require('express');
const router = express.Router();

router.get("/getAll", (req, res) => {
	res.send({msg: "Peticion get -> getAll"});
})

// Parameters
// http://localhost:3000/api/sumar/5/6
router.get("/sumar/:num1/:num2", (req, res) => {
	const {num1, num2} = req.params;
	res.send({msg: "Peticion get -> " + num1 + " / " + num2});
})

// Query
// http://localhost:3000/api/sumar?num1=5&num2=6
router.get("/sumar/", (req, res) => {
	const {num1, num2} = req.query;
	res.send({msg: "Peticion get -> " + num1 + " / " + num2});
})

// Operation
// http://localhost:3000/api/sumar?num1=5&num2=6
router.get("/sumar/:operacion", (req, res) => {
	const operacion = req.params.operacion;
	res.send({msg: eval(operacion)});
})

module.exports = router;