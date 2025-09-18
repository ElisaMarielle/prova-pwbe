const express = require("express");
const router = express.Router();

const ProdutosController = require ("../controllers/produtos.controllers");

router.get("/produtos", ProdutosController.listar);
router.get("/produto/:código", ProdutosController.buscar);
router.post("/produto", ProdutosController.cadastrar);
router.delete("/produtos/:código", ProdutosController.deletar);
router.put("/produto", ProdutosController.atualizar);

module.exports = router;