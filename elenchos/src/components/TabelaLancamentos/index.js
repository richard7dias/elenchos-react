import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditarConta from '../EditarConta';
import TituloSecundario from '../TituloSecundario';
import mesAtual from '../DataAtual';
import { getLancamentos } from '../../services/lancamentos';

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
    width: 300px;
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
        fetchLancamentos()
    }, []);


    return (
        <div>
            <TituloSecundario>LANÇAMENTOS DE {mesAtual().toUpperCase()}</TituloSecundario>
            <Tabela>
                <LinhaHeader>
                    <ColEditar />
                    <ColData>Data</ColData>
                    <ColDescricao>Descrição</ColDescricao>
                    <ColCategoria>Categoria</ColCategoria>
                    <ColValor>Valor (R$)</ColValor>
                </LinhaHeader>
                {
                    lancamentos.map(lancamento => (
                        < Linha >
                            <EditarConta
                                contaProp={lancamento.id}
                                valorProp={lancamento.valor}
                            />
                            <DadoLinha>{lancamento.data}</DadoLinha>
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