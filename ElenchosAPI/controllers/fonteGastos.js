const { getTodasFontesGastos, getFonteGastoPorDescricao, insereFonteGasto, modificaFonteGasto, excluiFonteGasto } = require('../services/fonteGastos');

function getFonteGastos(req, res) {
    try {
        res.send(getTodasFontesGastos());
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getFonteGasto(req, res) {
    try {
        const gastoExiste = getFonteGastoPorDescricao(req.params.descricao);

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

function postFonteGasto(req, res) {
    try {
        if (getFonteGastoPorDescricao(req.body.descricao)) {
            res.status(422)
            res.send("Fonte de gasto já existe.");
        } else if (req.body.descricao && req.body.valorGasto) {
            insereFonteGasto(req.body);
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

function patchFonteGasto(req, res) {
    try {
        const descricao = req.params.descricao;
        const body = req.body;
        const descricaoExistente = getFonteGastoPorDescricao(descricao).descricao;

        if (descricaoExistente === descricao) {
            modificaFonteGasto(body, descricao);
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

function deleteFonteGasto(req, res) {
    try {
        if (getFonteGastoPorDescricao(req.params.descricao)) {
            excluiFonteGasto(req.params.descricao);
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
    getFonteGastos,
    getFonteGasto,
    postFonteGasto,
    patchFonteGasto,
    deleteFonteGasto
}
