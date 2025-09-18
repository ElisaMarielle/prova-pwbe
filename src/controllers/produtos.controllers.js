const produtos = require("../data/produtos.data");

const listar = (req, res) => {
    res.send(produtos).end();
};

const buscar = (req, res) => {
    const código=req.params.código;

    pt = "";

    produtos.forEach((produtos, index) =>{
        if(produtos.código===código){
            pt=produtos;
        }
    });

    if(pt==="") pt = "Não encontrado";

    res.send(pt).end();
};

const cadastrar = (req, res) => {
    const novopd = req.body;

    if(produtos.quantidade<0){
        res.status(400).send("Quantidade não pode ser negativa.").end();
    }

    produtos.push(novopd);
    res.status(201).send("Cadastrado com sucesso.").end();
};

const deletar = (req, res) => {
    const código=req.params.código;

    var indice= -1;

    produtos.forEach((produtos, index) => {
        if(produtos.código===código){
            indice=index;
        }
    });

    if(indice=== -1){
        res.send("Não encontrado.");
    }
    else{
        produtos.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const pt=req.body;

    var encontrei = false;

    produtos.forEach((produtos, index) => {
        if(produtos.código===pt.código){
            produtos[index]=pt;
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

module.exports = {
    listar,
    buscar,
    cadastrar,
    deletar,
    atualizar
}