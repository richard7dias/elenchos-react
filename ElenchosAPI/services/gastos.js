const fs = require('fs');
const bancoDados = "gastos.json";
const gastos = JSON.parse(fs.readFileSync(bancoDados));

function getTodosGastos() {
    return gastos;
}

function getGastoPorDescricao(descricao) {
    return gastos.filter(gasto => gasto.descricao === descricao)[0];
}

function insereGasto(novaoGasto) {
    const novaListaDeGastos = [...gastos, novaoGasto];
    fs.writeFileSync(bancoDados, JSON.stringify(novaListaDeGastos));
}

function modificaGasto(modificacoes, descricao) {
    let gastosAtuais = gastos
    const indiceModificado = gastosAtuais.findIndex(gasto => gasto.descricao === descricao)
    const conteudoMudado = { ...gastosAtuais[indiceModificado], ...modificacoes }
    gastosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync(bancoDados, JSON.stringify(gastosAtuais))
}

function excluiGasto(descricao) {
    let gastosAtuais = gastos
    const index = gastosAtuais.findIndex(gasto => gasto.descricao === descricao)
    gastosAtuais.splice(index, 1)
    fs.writeFileSync(bancoDados, JSON.stringify(gastosAtuais))
}

module.exports = {
    getTodosGastos,
    getGastoPorDescricao,
    insereGasto,
    modificaGasto,
    excluiGasto
}