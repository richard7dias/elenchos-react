const { getTodosLancamentos, insereLancamento, modificaLancamento, excluiLancamento, getLancamentoPorId } = require('../services/lancamentos');


function getLancamentos(req, res) {
    try {
        res.send(getTodosLancamentos());
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getLancamento(req, res) {
    try {
        const lancamentoExiste = getLancamentoPorId(req.params.id);

        if (lancamentoExiste) {
            res.send(lancamentoExiste);
        } else {
            res.status(422);
            res.send("Lançamento não encontrado.");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postLancamento(req, res) {
    try {
        if (getLancamentoPorId(req.body.id)) {
            res.status(422);
            res.send("Id já existe.");
        } else if (req.body.id && req.body.categoria && req.body.data && req.body.valor) {
            insereLancamento(req.body);
            res.status(201);
            res.send("Lançamento de gasto adicionado com sucesso!");
        } else {
            res.status(422);
            res.send("Campos id, categoria, data e valor são obrigatórios.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchLancamento(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const idExistente = getLancamentoPorId(id).id;

        if (idExistente === id) {
            modificaLancamento(body, id);
            res.send("Item modificado com sucesso!");
        }
        else {
            res.status(422);
            res.send("Lançamento de gasto não encontrado.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteLancamento(req, res) {
    try {
        if (getLancamentoPorId(req.params.id)) {
            excluiLancamento(req.params.id);
            res.send("Lançamento de gasto excluído com sucesso!");
        } else {
            res.status(422);
            res.send("Lançamento de gasto não encontrado.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLancamentos,
    getLancamento,
    postLancamento,
    patchLancamento,
    deleteLancamento
}
