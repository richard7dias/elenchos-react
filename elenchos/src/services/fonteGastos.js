import axios from 'axios';

const fonteGastosAPI = axios.create({ baseURL: 'http://localhost:8000/fonte-gastos' })

async function getFonteGastos() {
    const response = await fonteGastosAPI.get('/')
    return response.data
}

async function postFonteGastos(descricao) {
    await fonteGastosAPI.post(`/${descricao}`)
}

async function deleteFonteGastos(descricao) {
    await fonteGastosAPI.delete(`/${descricao}`)
}

export {
    getFonteGastos,
    postFonteGastos,
    deleteFonteGastos
}