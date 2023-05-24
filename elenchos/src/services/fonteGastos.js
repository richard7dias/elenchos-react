import axios from 'axios';

const fonteGastosAPI = axios.create({ baseURL: 'http://localhost:8000/fonte-gastos' });

async function getFonteGastos() {
    const response = await fonteGastosAPI.get('/');
    return response.data;
}

async function postFonteGasto(novaFonteGasto) {
    await fonteGastosAPI.post('/', novaFonteGasto);
}

async function patchFonteGasto(descricao, fonteGasto) {
    await fonteGastosAPI.patch(`/${descricao}`, fonteGasto);
}

async function deleteFonteGasto(descricao) {
    await fonteGastosAPI.delete(`/${descricao}`);
}

export {
    getFonteGastos,
    postFonteGasto,
    patchFonteGasto,
    deleteFonteGasto
}