const { getTodosGastos, getGastoPorDescricao, insereGasto, modificaGasto, excluiGasto } = require('../services/gastos');

function getGastos(req, res) {
    try {
        res.send(getTodosGastos());
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getGasto(req, res) {
    try {
        const gastoExiste = getGastoPorDescricao(req.params.descricao);

        if (gastoExiste) {
            res.send(gastoExiste);
        } else {
            res.status(422);
            res.send("Fonte de gasto não encontrado.");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postGasto(req, res) {
    try {
        if (getGastoPorDescricao(req.body.descricao)) {
            res.status(422)
            res.send("Fonte de gasto já existe.");
        } else if (req.body.descricao && req.body.valorGasto) {
            insereGasto(req.body);
            res.status(201);
            res.send("Fonte de gasto adicionado com sucesso!");
        } else {
            res.status(422);
            res.send("Campos descricao e valorGasto são obrigatórios.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchGasto(req, res) {
    try {
        const descricao = req.params.descricao;
        const body = req.body;
        const descricaoExistente = getGastoPorDescricao(descricao).descricao;

        if (descricaoExistente === descricao) {
            modificaGasto(body, descricao);
            res.send("Item modificado com sucesso!");
        }
        else {
            res.status(422);
            res.send("Fonte de gasto não encontrado.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteGasto(req, res) {
    try {
        if (getGastoPorDescricao(req.params.descricao)) {
            excluiGasto(req.params.descricao);
            res.send("Fonte de gasto excluído com sucesso!");
        } else {
            res.status(422);
            res.send("Fonte de gasto não encontrado.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getGastos,
    getGasto,
    postGasto,
    patchGasto,
    deleteGasto
}
