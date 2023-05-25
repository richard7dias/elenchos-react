import axios from 'axios';

const saldosAPI = axios.create({ baseURL: 'http://localhost:8000/saldos' });

async function getSaldos() {
    const response = await saldosAPI.get('/');
    return response.data;
}

async function getSaldo(conta) {
    const response = await saldosAPI.get(`/${conta}`);
    return response.data;
}

async function postSaldo(novoSaldo) {
    await saldosAPI.post('/', novoSaldo);
}

async function patchSaldo(conta, saldo) {
    await saldosAPI.patch(`/${conta}`, saldo);
}

async function deleteSaldo(conta) {
    await saldosAPI.delete(`/${conta}`);
}

export {
    getSaldos,
    getSaldo,
    postSaldo,
    patchSaldo,
    deleteSaldo
}