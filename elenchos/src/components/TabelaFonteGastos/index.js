import { useEffect, useState } from 'react';
import { getFonteGastos } from '../../services/fonteGastos';
import styled from 'styled-components';
import SomaFonteGastos from '../CaixaHome/SomaFonteGastos';
import EditarFonteGasto from '../EditarFonteGasto';
import nomeMesAtual from '../Datas/mesAtual';
import SomaTotais from '../TabelaCategorias/SomaTotais';

const Tabela = styled.table`
    margin: auto;
    margin-top: 0;
    border-collapse: collapse;
    border: 1px solid white;
    font-size: 0.8rem;

    caption {
        margin-bottom: 10px;
        font-size: 0.9rem;
        color: #594b3b;
    }

    th {
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
    display: flex;
    border: 1px solid white;
    padding: 5px 0;
`

const DescricaoMesAtual = styled.td`
    background-color: #99958f;
    color: white;
    display: flex;
    border: 1px solid white;
    padding: 5px 0 5px 10px;
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
            <caption>GASTOS</caption>
            <tr>
                <ColDescricao>Descrição</ColDescricao>
                <ColValor>Valor (R$)</ColValor>
            </tr>
            <tr>
                <DescricaoMesAtual>
                    Mês Atual - {nomeMesAtual()}
                </DescricaoMesAtual>
                <Dinheiro>{SomaTotais("disponivel")}</Dinheiro>
            </tr>
            {
                fonteGastos.map(fonteGasto => (
                    <tr>
                        <Descricao>
                            <EditarFonteGasto
                                descricaoProp={fonteGasto.descricao}
                                valorProp={fonteGasto.valorGasto}
                            />
                            {fonteGasto.descricao}
                        </Descricao>
                        <Dinheiro>{fonteGasto.valorGasto}</Dinheiro>
                    </tr>
                ))
            }
            <tfoot>
                <td>Total</td>
                <Dinheiro><strong>{SomaFonteGastos()}</strong></Dinheiro>
            </tfoot>
        </Tabela>
    )
}

export default TabelaFonteGastos;