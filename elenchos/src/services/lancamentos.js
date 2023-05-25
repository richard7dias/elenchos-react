import axios from 'axios';

const lancamentosAPI = axios.create({ baseURL: 'http://localhost:8000/lancamentos' });

async function getLancamentos() {
    const response = await lancamentosAPI.get('/');
    return response.data;
}

async function getLancamento(id) {
    const response = await lancamentosAPI.get(`/${id}`);
    return response.data;
}

async function postLancamento(lancamento) {
    await lancamentosAPI.post('/', lancamento);
}

async function patchLancamento(id, lancamento) {
    await lancamentosAPI.patch(`/${id}`, lancamento);
}

async function deleteLancamento(id) {
    await lancamentosAPI.delete(`/${id}`);
}

export {
    getLancamentos,
    getLancamento,
    postLancamento,
    patchLancamento,
    deleteLancamento
}