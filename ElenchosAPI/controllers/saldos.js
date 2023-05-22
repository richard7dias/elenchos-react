const { getTodosSaldos, getSaldoPorConta, modificaSaldo, excluiSaldo, insereSaldo } = require('../services/saldos');

function getSaldos(req, res) {
    try {
        res.send(getTodosSaldos());
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getSaldo(req, res) {
    try {
        const saldoExiste = getSaldoPorConta(req.params.conta);

        if (saldoExiste) {
            res.send(saldoExiste);
        } else {
            res.status(422);
            res.send("Conta não encontrada.");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postSaldo(req, res) {
    try {
        if (getSaldoPorConta(req.body.conta)) {
            res.status(422);
            res.send("Conta já existe.");
        } else if (req.body.conta && req.body.valorSaldo) {
            insereSaldo(req.body);
            res.status(201);
            res.send("Conta adicionada com sucesso!");
        } else {
            res.status(422);
            res.send("Campos conta e valorSaldo são obrigatórios.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchSaldo(req, res) {
    try {
        const conta = req.params.conta;
        const body = req.body;
        const contaExistente = getSaldoPorConta(conta).conta;

        if (contaExistente === conta) {
            modificaSaldo(body, conta);
            res.send("Conta modificada com sucesso!");
        }
        else {
            res.status(422);
            res.send("Conta não encontrada.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteSaldo(req, res) {
    try {
        if (getSaldoPorConta(req.params.conta)) {
            excluiSaldo(req.params.conta);
            res.send("Conta excluída com sucesso!");
        } else {
            res.status(422);
            res.send("Conta não encontrada.");
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getSaldos,
    getSaldo,
    postSaldo,
    patchSaldo,
    deleteSaldo
}
