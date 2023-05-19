const fs = require('fs');
const bancoDados = "categorias.json";
const categorias = JSON.parse(fs.readFileSync(bancoDados));

function getTodasCategorias() {
    return categorias;
}

function getCategoriaPorNome(nome) {
    return categorias.filter(categoria => categoria.nome === nome)[0];
}

function insereCategoria(novaCategoria) {
    const novaListaDeCategorias = [...categorias, novaCategoria];
    fs.writeFileSync(bancoDados, JSON.stringify(novaListaDeCategorias));
}

function modificaCategoria(modificacoes, nome) {
    let categoriasAtuais = categorias
    const indiceModificado = categoriasAtuais.findIndex(categoria => categoria.nome === nome)
    const conteudoMudado = { ...categoriasAtuais[indiceModificado], ...modificacoes }
    categoriasAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync(bancoDados, JSON.stringify(categoriasAtuais))
}

function excluiCategoria(nome) {
    let categoriasAtuais = categorias
    const index = categoriasAtuais.findIndex(categoria => categoria.nome === nome)
    categoriasAtuais.splice(index, 1)
    fs.writeFileSync(bancoDados, JSON.stringify(categoriasAtuais))
}

module.exports = {
    getTodasCategorias,
    getCategoriaPorNome,
    insereCategoria,
    modificaCategoria,
    excluiCategoria
}