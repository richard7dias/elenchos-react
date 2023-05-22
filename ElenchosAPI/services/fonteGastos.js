const fs = require('fs');
const bancoDados = "fonteGastos.json";
const gastos = JSON.parse(fs.readFileSync(bancoDados));

function getTodasFontesGastos() {
    return gastos;
}

function getFonteGastoPorDescricao(descricao) {
    return gastos.filter(gasto => gasto.descricao === descricao)[0];
}

function insereFonteGasto(novaoGasto) {
    const novaListaDeGastos = [...gastos, novaoGasto];
    fs.writeFileSync(bancoDados, JSON.stringify(novaListaDeGastos));
}

function modificaFonteGasto(modificacoes, descricao) {
    let gastosAtuais = gastos
    const indiceModificado = gastosAtuais.findIndex(gasto => gasto.descricao === descricao)
    const conteudoMudado = { ...gastosAtuais[indiceModificado], ...modificacoes }
    gastosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync(bancoDados, JSON.stringify(gastosAtuais))
}

function excluiFonteGasto(descricao) {
    let gastosAtuais = gastos
    const index = gastosAtuais.findIndex(gasto => gasto.descricao === descricao)
    gastosAtuais.splice(index, 1)
    fs.writeFileSync(bancoDados, JSON.stringify(gastosAtuais))
}

module.exports = {
    getTodasFontesGastos,
    getFonteGastoPorDescricao,
    insereFonteGasto,
    modificaFonteGasto,
    excluiFonteGasto
}