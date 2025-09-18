const express = require("express");
const router = express.Router();

const ClientesController = require ("../controllers/clientes.controllers");

router.get("/clientes", ClientesController.listar);
router.get("/cliente/:cpf", ClientesController.buscar);
router.post("/cliente", ClientesController.cadastrar);
router.delete("/clientes/:cpf", ClientesController.deletar);
router.put("/cliente", ClientesController.atualizar);

module.exports = router;