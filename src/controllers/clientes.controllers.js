const clientes = require("../data/clientes.data");

const listar = (req, res) => {
    res.send(clientes).end();
};

const buscar = (req, res) => {
    const cpf=req.params.cpf;

    cl = "";

    clientes.forEach((clientes, index) =>{
        if(clientes.cpf===cpf){
            cl=clientes;
        }
    });

    if(cl==="") cl = "Não encontrado";

    res.send(cl).end();
};

const cadastrar = (req, res) => {
    const novocl = req.body;

    cpf = "";
    
    if(clientes.cpf===cpf){
        res.send("Não foi possível cadastrar");
    }
    else{
        clientes.push(novocl);
        res.status(201).send("Cadastrado com sucesso.").end();
    }
    
};

const deletar = (req, res) => {
    const id=req.params.id;

    var indice= -1;

    clientes.forEach((clientes, index) => {
        if(clientes.id===id){
            indice=index;
        }
    });

    if(indice=== -1){
        res.send("Não encontrado.");
    }
    else{
        clientes.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const cl=req.body;

    var encontrei = false;

    clientes.forEach((clientes, index) => {
        if(clientes.id===cl.id){
            clientes[index]=cl;
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