import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCategorias } from '../../services/categorias';
import EditarCategoria from '../EditarCategoria';
import CalculaGasto from '../CalculaGastoDisponivel/CalculaGasto';
import CalculaDisponivel from '../CalculaGastoDisponivel/CalculaDisponivel';
import SomaTotais from './SomaTotais';


const ContainerTabela = styled.div`
  max-width: 800px;
  display: flex;
  margin: 30px auto;
`

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

const ColCategoria = styled.th`
    width: 200px;
`

const ColValores = styled.th`
    width: 140px;
`

const LinhaDados = styled.tr`
    border-bottom: 2px solid #99958f;
`

const NomeCategoria = styled.td`
    background-color: #99958f;
    color: white;
    display: flex;
`

const Dinheiro = styled.td`
    text-align: end;
`

const DinheiroGasto = styled.td`
    text-align: end;
    color: #903B33;
`

const DinheiroDisponivel = styled.td`
    text-align: end;
    color: #387876;
`

function TabelaCategorias() {
    const [categorias, setCategorias] = useState([]);

    async function fetchCategorias() {
        const categoriasDaAPI = await getCategorias();
        setCategorias(categoriasDaAPI);
    }

    useEffect(() => {
        fetchCategorias()
    }, []);

    CalculaGasto();
    CalculaDisponivel();

    return (
        <ContainerTabela>
            <Tabela>
                <tr>
                    <ColCategoria>Categoria</ColCategoria>
                    <ColValores>Orçamento (R$)</ColValores>
                    <ColValores>Gasto (R$)</ColValores>
                    <ColValores>Disponível (R$)</ColValores>
                </tr>
                {
                    categorias.map(categoria => (

                        < LinhaDados >
                            <NomeCategoria>
                                <EditarCategoria
                                    nomeProp={categoria.nome}
                                    orcamentoProp={categoria.orcamento}
                                />
                                {categoria.nome}
                            </NomeCategoria>
                            <Dinheiro>{categoria.orcamento}</Dinheiro>
                            <DinheiroGasto>{categoria.gasto}</DinheiroGasto>
                            <DinheiroDisponivel>{categoria.disponivel}</DinheiroDisponivel>
                        </LinhaDados>
                    ))
                }
                <tfoot>
                    <td>Total</td>
                    <Dinheiro><strong>{SomaTotais("orcamento")}</strong></Dinheiro>
                    <Dinheiro><strong>{SomaTotais("gasto")}</strong></Dinheiro>
                    <Dinheiro><strong>{SomaTotais("disponivel")}</strong></Dinheiro>
                </tfoot>
            </Tabela >
        </ContainerTabela>
    )
}

export default TabelaCategorias;