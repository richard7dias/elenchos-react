import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TituloSecundario from '../TituloSecundario';
import nomeMesAtual, { anoAtual, mesAtual } from '../Datas/mesAtual';
import { getLancamentos } from '../../services/lancamentos';
import EditarLancamento from '../EditarLancamento';

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

    th {
        border: 1px solid white;
        padding: 5px 10px;
    }

    td{
        padding: 5px 10px;
    }
`

const ColEditar = styled.th`
    width: 40px;
`

const ColData = styled.th`
    width: 110px;
`

const ColDescricao = styled.th`
    width: 335px;
    text-align: start;
`

const ColCategoria = styled.th`
    width: 130px;
`

const ColValor = styled.th`
    width: 100px;
`

const LinhaHeader = styled.tr`
    border-bottom: 3px solid #99958f;
`

const ContainerEditar = styled.div`
    text-align: center;
    padding-top: 4px;
`

const Linha = styled.tr`
    border-bottom: 2px solid #99958f;
`

const DadoLinha = styled.td`
    text-align: center;
`

const DadoDescricao = styled.td`
    text-align: start;
`

const Dinheiro = styled.td`
    text-align: end;
`

function TabelaLancamentos() {
    const [lancamentos, setLancamentos] = useState([]);

    async function fetchLancamentos() {
        const lancamentosDaAPI = await getLancamentos();
        setLancamentos(lancamentosDaAPI);
    }

    useEffect(() => {
        fetchLancamentos();
    }, []);

    const filtrados = lancamentos
        .filter(lancamento =>
            lancamento.data.substring(0, 4) == anoAtual.toString()
            && lancamento.data.substring(5, 7) == mesAtual
        );

    let ordenadosData = [];
    for (let i = 1; i <= 31; i++) {
        let filtro = filtrados.filter(lancamento => lancamento.data.substring(8, 10) == i);
        if (filtro.length != 0) {
            ordenadosData.push(...filtro);
        }
    }

    return (
        <div>
            <TituloSecundario>LANÇAMENTOS DE {nomeMesAtual().toUpperCase()}</TituloSecundario>
            <Tabela>
                <LinhaHeader>
                    <ColEditar>Editar</ColEditar>
                    <ColData>Data</ColData>
                    <ColDescricao>Descrição</ColDescricao>
                    <ColCategoria>Categoria</ColCategoria>
                    <ColValor>Valor (R$)</ColValor>
                </LinhaHeader>
                {
                    ordenadosData.map(lancamento => (
                        < Linha >
                            <ContainerEditar>
                                <EditarLancamento lancamento={lancamento} />
                            </ContainerEditar>
                            <DadoLinha>
                                {
                                    lancamento.data.split('-').reverse().join('/')
                                }
                            </DadoLinha>
                            <DadoDescricao>{lancamento.descricao}</DadoDescricao>
                            <DadoLinha>{lancamento.categoria}</DadoLinha>
                            <Dinheiro>{lancamento.valor}</Dinheiro>
                        </Linha>
                    )).reverse()
                }
            </Tabela >
        </div>

    )
}

export default TabelaLancamentos;