import { useEffect, useState } from 'react';
import { getSaldos } from '../../services/saldos';

function SomaSaldos() {
    const [saldos, setSaldos] = useState([]);

    async function fetchSaldos() {
        const saldosDaAPI = await getSaldos()
        setSaldos(saldosDaAPI)
    }

    useEffect(() => {
        fetchSaldos()
    }, [])

    let somaTotalSaldos = 0;
    saldos.map(saldo => (
        somaTotalSaldos += saldo.valorSaldo
    ));
    return somaTotalSaldos;
}

export default SomaSaldos;