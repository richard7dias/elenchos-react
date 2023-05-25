import axios from 'axios';

const categoriasAPI = axios.create({ baseURL: 'http://localhost:8000/categorias' });

async function getCategorias() {
    const response = await categoriasAPI.get('/');
    return response.data;
}

async function getCategoria(nome) {
    const response = await categoriasAPI.get(`/${nome}`);
    return response.data;
}

async function postCategoria(novaCategoria) {
    await categoriasAPI.post('/', novaCategoria);
}

async function patchCategoria(nome, categoria) {
    await categoriasAPI.patch(`/${nome}`, categoria);
}

async function deleteCategoria(nome) {
    await categoriasAPI.delete(`/${nome}`);
}

export {
    getCategorias,
    getCategoria,
    postCategoria,
    patchCategoria,
    deleteCategoria
}