const fs = require('fs');
const bancoDados = "lancamentos.json";
const lancamentos = JSON.parse(fs.readFileSync(bancoDados));

function getTodosLancamentos() {
    return lancamentos;
}

function getLancamentoPorId(id) {
    return lancamentos.filter(lancamento => lancamento.id === id)[0];
}

function insereLancamento(novoLancamento) {
    const novaListaDeLancamentos = [...lancamentos, novoLancamento];
    fs.writeFileSync(bancoDados, JSON.stringify(novaListaDeLancamentos));
}

function modificaLancamento(modificacoes, id) {
    let lancamentosAtuais = lancamentos
    const indiceModificado = lancamentosAtuais.findIndex(lancamento => lancamento.id === id)
    const conteudoMudado = { ...lancamentosAtuais[indiceModificado], ...modificacoes }
    lancamentosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync(bancoDados, JSON.stringify(lancamentosAtuais))
}

function excluiLancamento(id) {
    let lancamentosAtuais = lancamentos
    const index = lancamentosAtuais.findIndex(lancamento => lancamento.id === id)
    lancamentosAtuais.splice(index, 1)
    fs.writeFileSync(bancoDados, JSON.stringify(lancamentosAtuais))
}

module.exports = {
    getTodosLancamentos,
    getLancamentoPorId,
    insereLancamento,
    modificaLancamento,
    excluiLancamento
}