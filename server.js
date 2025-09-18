const express = require("express");
const cors = require("cors");

const ClienteRoutes = require("./src/routes/clientes.routes")
const PedidoRoutes = require("./src/routes/pedidos.routes")
const ProdutoRoutes = require("./src/routes/produtos.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use(ClienteRoutes);
app.use(PedidoRoutes);
app.use(ProdutoRoutes);

app.listen(3000, ()=> {
    console.log("Senvidor Online na porta 3000");
});