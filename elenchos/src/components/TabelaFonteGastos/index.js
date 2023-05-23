import { useEffect, useState } from 'react';
import { getFonteGastos } from '../../services/fonteGastos';
import styled from 'styled-components';
import Botao from '../Botao';
import SomaFonteGastos from '../CaixaHome/SomaFonteGastos';

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

function TabelaFonteGastos() {
    const [fonteGastos, setFonteGastos] = useState([]);

    async function fetchFonteGastos() {
        const fonteGastosDaAPI = await getFonteGastos()
        setFonteGastos(fonteGastosDaAPI)
    }

    useEffect(() => {
        fetchFonteGastos()
    }, [])

    return (
        <Tabela>
            <caption><Botao>+</Botao> GASTOS</caption>
            <tr>
                <ColDescricao>Descrição</ColDescricao>
                <ColValor>Valor (R$)</ColValor>
            </tr>
            {
                fonteGastos.map(fonteGasto => (
                    <tr>
                        <Descricao><Botao>•</Botao> {fonteGasto.descricao}</Descricao>
                        <Dinheiro>{fonteGasto.valorGasto}</Dinheiro>
                    </tr>
                ))
            }
            <tfoot>
                <td>Total</td>
                <Dinheiro>{SomaFonteGastos()}</Dinheiro>
            </tfoot>
        </Tabela>
    )
}

export default TabelaFonteGastos;