const { getTodasCategorias, getCategoriaPorNome, insereCategoria, modificaCategoria, excluiCategoria } = require('../services/categorias');


function getCategorias(req, res) {
    try {
        const categorias = getTodasCategorias();
        res.send(categorias);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getCategoria(req, res) {
    try {
        const nome = req.params.nome;
        const categoriaExiste = getCategoriaPorNome(nome);

        if (categoriaExiste) {
            res.send(categoriaExiste);
        } else {
            res.status(422);
            res.send("Categoria não encontrada.");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postCategoria(req, res) {
    try {
        if (getCategoriaPorNome(req.body.nome)) {
            res.status(422)
            res.send("Categoria já existe.");
        } else if (req.body.nome) {
            insereCategoria(req.body);
            res.status(201);
            res.send("Categoria adicionada com sucesso!");
        } else {
            res.status(422);
            res.send("Campo nome é obrigatório.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchCategoria(req, res) {
    try {
        const nome = req.params.nome;
        const body = req.body;
        const nomeExistente = getCategoriaPorNome(nome).nome;

        if (nomeExistente === nome) {
            modificaCategoria(body, nome);
            res.send("Item modificado com sucesso!");
        }
        else {
            res.status(422);
            res.send("Categoria não encontrada.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteCategoria(req, res) {
    try {
        if (getCategoriaPorNome(req.params.nome)) {
            excluiCategoria(req.params.nome);
            res.send("Categoria excluída com sucesso!");
        } else {
            res.status(422);
            res.send("Categoria não encontrada.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getCategorias,
    getCategoria,
    postCategoria,
    patchCategoria,
    deleteCategoria
}