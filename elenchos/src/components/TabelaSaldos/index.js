import { useEffect, useState } from 'react';
import { getSaldos } from '../../services/saldos';
import styled from 'styled-components';
import Botao from '../Botao';
import SomaSaldos from '../CaixaHome/SomaSaldos';
import InserirSaldoOuGasto from '../InserirSaldoOuGasto';

const Tabela = styled.table`
    margin: auto;
    border-collapse: collapse;
    border: 1px solid white;
    font-size: 0.8rem;

    caption {
        margin-bottom: 10px;
        font-size: 0.9rem;
        color: #594b3b;
    }

    td, th {
        border: 1px solid white;
        padding: 5px 0;
    }

    tfoot td {
        text-align: end;
    }
`

const ColDescricao = styled.th`
    width: 200px;
`

const ColValor = styled.th`
    width: 100px;
`

const Descricao = styled.td`
    background-color: #99958f;
    color: white;
`

const Dinheiro = styled.td`
    text-align: end;
`

function TabelaSaldos() {
    const [saldos, setSaldos] = useState([]);
    const [janelaInserir, setJanelaInserir] = useState("");

    async function fetchSaldos() {
        const saldosDaAPI = await getSaldos();
        setSaldos(saldosDaAPI);
    }

    useEffect(() => {
        fetchSaldos()
    }, []);


    return (
        <Tabela>
            <caption><Botao onClick={() => setJanelaInserir(<InserirSaldoOuGasto />)}>+</Botao> CONTAS</caption>
            <tr>
                <ColDescricao>Descrição</ColDescricao>
                <ColValor>Valor (R$)</ColValor>
            </tr>
            {
                saldos.map(saldo => (
                    <tr>
                        <Descricao><Botao>•</Botao> {saldo.conta}</Descricao>
                        <Dinheiro>{saldo.valorSaldo}</Dinheiro>
                    </tr>
                ))
            }
            {janelaInserir}
            <tfoot>
                <td>Total</td>
                <Dinheiro>{SomaSaldos()}</Dinheiro>
            </tfoot>
        </Tabela >
    )
}

export default TabelaSaldos;