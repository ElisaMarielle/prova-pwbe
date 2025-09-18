const express = require("express");
const router = express.Router();

const PedidosController = require ("../controllers/pedidos.controllers");

router.get("/pedidos", PedidosController.listar);
router.get("/pedido/:código", PedidosController.buscar);
router.post("/pedido", PedidosController.cadastrar);
router.delete("/pedidos/:código", PedidosController.deletar);
router.put("/pedido", PedidosController.atualizar);

module.exports = router;