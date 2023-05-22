const fs = require('fs');
const bancoDados = "saldos.json";
const saldos = JSON.parse(fs.readFileSync(bancoDados));

function getTodosSaldos() {
    return saldos;
}

function getSaldoPorConta(conta) {
    return saldos.filter(saldo => saldo.conta === conta)[0];
}

function insereSaldo(novoSaldo) {
    const novaListaDeSaldos = [...saldos, novoSaldo];
    fs.writeFileSync(bancoDados, JSON.stringify(novaListaDeSaldos));
}

function modificaSaldo(modificacoes, conta) {
    let saldosAtuais = saldos
    const indiceModificado = saldosAtuais.findIndex(saldo => saldo.conta === conta)
    const conteudoMudado = { ...saldosAtuais[indiceModificado], ...modificacoes }
    saldosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync(bancoDados, JSON.stringify(saldosAtuais))
}

function excluiSaldo(conta) {
    let saldosAtuais = saldos
    const index = saldosAtuais.findIndex(saldo => saldo.conta === conta)
    saldosAtuais.splice(index, 1)
    fs.writeFileSync(bancoDados, JSON.stringify(saldosAtuais))
}

module.exports = {
    getTodosSaldos,
    getSaldoPorConta,
    insereSaldo,
    modificaSaldo,
    excluiSaldo
}