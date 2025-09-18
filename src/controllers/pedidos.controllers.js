const pedidos = require("../data/pedidos.data");

const listar = (req, res) => {
    res.send(pedidos).end();
};

const buscar = (req, res) => {
    const código=req.params.código;

    pd = "";

    pedidos.forEach((pedidos, index) =>{
        if(pedidos.código===código){
            pd=pedidos;
        }
    });

    if(pd==="") pd = "Não encontrado";

    res.send(pd).end();
};

const cadastrar = (req, res) => {
    const novopd = req.body;
    const data = req.body;

    if (data.quantidade <= 0) {
        res.status(400).send("Quantidade deve ser maior que zero").end();
    }

    pedidos.push(novopd);
    res.status(201).send("Cadastrado com sucesso.").end();
};

const atualizar = (req, res) => {
    const pd=req.body;

    var encontrei = false;

    pedidos.forEach((pedidos, index) => {
        if(pedidos.código===pd.código){
            pedidos[index]=pd;
            encontrei = true;
        }
    });

    if(encontrei=false){
        res.status(401).end();
    }
    else{
        res.status(201).end();
    }
};

const deletar = (req, res) => {
    const código=req.params.código;

    var indice= -1;

    pedidos.forEach((pedidos, index) => {
        if(pedidos.código===código){
            indice=index;
        }
    });

    if(indice=== -1){
        res.send("Não encontrado.");
    }
    else{
        pedidos.splice(indice, 1);
        res.status(200).end();
    }
};


module.exports = {
    listar,
    buscar,
    cadastrar,
    deletar,
    atualizar
}