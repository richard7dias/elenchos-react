import styled from 'styled-components';
import TituloSecundario from '../TituloSecundario';
import { useEffect, useState } from 'react';
import { getCategorias } from '../../services/categorias';
import { getLancamentos, postLancamento } from '../../services/lancamentos';

const Formulario = styled.form`
    display: flex;
    justify-content: center;
`

const DataContainer = styled.div`
    width: 110px;
`

const DescricaoContainer = styled.div`
    width: 300px;
    margin: 0 20px 0 30px;
`

const CategoriaContainer = styled.div`
    width: 130px;
`

const ValorContainer = styled.div`
    width: 100px;
    margin-left: 20px;
`

const LabelInput = styled.p`
    font-size: 0.8rem;
    margin-bottom: 0px;
    text-align: center;
`

const InputForm = styled.input`
    width: 94%;
    margin-top: 10px;
    background-color: #99958f;
    color: white;
    border: none;
    height: 25px;
    padding: 0 10px;
`

const SelectCategoria = styled.select`
    width: 100%;
    margin-top: 10px;
    background-color: #99958f;
    color: white;
    border: none;
    height: 25px;
    padding: 0 10px;
`

const BotaoLancar = styled.button`
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    background-color: #387876;
    border: none;
    margin: 37px 0 0 30px;
    width: 80px;
    height: 26px;

    &:hover{
        background-color: #60CCC8;
        transition: .2s;
    }

    &:active {
        background-color: #99958f;
        transition: .2s;
    }
`

function FormLancar() {
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [valor, setValor] = useState("");

    const [categorias, setCategorias] = useState([]);
    const [lancamentos, setLancamentos] = useState([]);

    async function fetchCategorias() {
        const categoriasDaAPI = await getCategorias();
        setCategorias(categoriasDaAPI);
    }

    async function fetchLancamentos() {
        const lancamentosDaAPI = await getLancamentos();
        setLancamentos(lancamentosDaAPI);
    }

    useEffect(() => {
        fetchCategorias()
    }, []);

    useEffect(() => {
        fetchLancamentos()
    }, []);

    async function insereLancamento(lancamento) {
        await postLancamento(lancamento);
    }

    function submitFormulario() {
        if (data && categoria && categoria !== "Selecione" && valor) {
            const lancamento = {
                "id": geraId(),
                "data": data,
                "descricao": descricao,
                "categoria": categoria,
                "valor": parseFloat(valor)
            };
            insereLancamento(lancamento);
        } else {
            alert("Campos data, categoria, e valor são obrigatórios!");
        }
    }

    function geraId() {
        if (lancamentos.at(-1)) {
            const ultimoLancamento = lancamentos.at(-1);
            return ultimoLancamento.id + 1;
        } else {
            return 1;
        }
    }

    return (
        <div>
            <TituloSecundario>NOVO LANÇAMENTO DE GASTO</TituloSecundario>
            <Formulario>
                <DataContainer>
                    <LabelInput>Data</LabelInput>
                    <InputForm type='date' onChange={evento => {
                        setData(evento.target.value
                            .split('-')
                            .reverse()
                            .join('/')
                        )
                    }}
                    ></InputForm>
                </DataContainer>

                <DescricaoContainer>
                    <LabelInput>Descrição</LabelInput>
                    <InputForm type='text' onChange={evento => { setDescricao(evento.target.value) }}></InputForm>
                </DescricaoContainer>

                <CategoriaContainer>
                    <LabelInput>Categoria</LabelInput>
                    <SelectCategoria onChange={evento => { setCategoria(evento.target.value) }}>
                        <option>Selecione</option>
                        {
                            categorias.map(categoria => (
                                <option>{categoria.nome}</option>
                            ))
                        }
                    </SelectCategoria>
                </CategoriaContainer>

                <ValorContainer>
                    <LabelInput>Valor</LabelInput>
                    <InputForm type='number' placeholder='R$' onChange={evento => { setValor(evento.target.value) }}></InputForm>
                </ValorContainer>
                <BotaoLancar type='submit' onClick={submitFormulario}>Lançar</BotaoLancar>
            </Formulario>
        </div>
    )
}

export default FormLancar;