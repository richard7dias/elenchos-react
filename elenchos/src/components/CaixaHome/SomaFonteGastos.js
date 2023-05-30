import { useEffect, useState } from 'react';
import { getFonteGastos } from '../../services/fonteGastos';
import SomaTotais from '../TabelaCategorias/SomaTotais';

function SomaFonteGastos() {
    const [fonteGastos, setFonteGastos] = useState([]);

    async function fetchFonteGastos() {
        const fonteGastosDaAPI = await getFonteGastos()
        setFonteGastos(fonteGastosDaAPI)
    }

    useEffect(() => {
        fetchFonteGastos()
    }, [])

    let somaTotalFonteGastos = 0;
    fonteGastos.map(fonteGasto => (
        somaTotalFonteGastos += fonteGasto.valorGasto
    ));
    return somaTotalFonteGastos + SomaTotais("disponivel");
}

export default SomaFonteGastos;