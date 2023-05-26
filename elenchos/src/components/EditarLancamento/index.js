import { useEffect, useState } from 'react';
import { deleteLancamento, patchLancamento } from '../../services/lancamentos';
import Modal from 'react-modal';
import styled from 'styled-components';
import './estiloModal.css';
import TituloSecundario from '../TituloSecundario';
import Botao from '../Botao';
import ImgEditar from '../../img/pen-solid.png';
import ImagemApagar from '../../img/trash-solid.png';
import { getCategorias } from '../../services/categorias';


const ModalContainer = styled.div`
    position: relative;
`

const BarraSuperior = styled.div`
    border-bottom: 2px solid #99958f;
`

const ContainerTexto = styled.div`
    display: inline-block;
`

const Formulario = styled.form`
    margin-top: 40px;
`

const ContainerLabel = styled.div`
    margin-top: 20px;
    font-size: 0.9rem;
`

const Input = styled.input`
    width: 96%;
    margin-top: 10px;
    background-color: #99958f;
    color: white;
    border: none;
    height: 25px;
    padding-left: 10px;
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

const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
`

const BtnSubmit = styled.button`
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    color: #fff;
    background-color: #387876;
    border: none;
    margin-top: 20px;
    width: 80%;
    padding: 10px;

    &:hover{
        background-color: #60CCC8;
        transition: .2s;
    }

    &:active {
        background-color: #99958f;
        transition: .2s;
    }
`

const BtnApagar = styled.button`
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    color: #fff;
    background-color: #903B33;
    border: none;
    margin-top: 20px;
    padding: 10px;
    width: 20%;

    &:hover{
        background-color: #60CCC8;
        transition: .2s;
    }

    &:active {
        background-color: #99958f;
        transition: .2s;
    }
`

const Apagar = styled.img`
    height: 18px;
    cursor: pointer;
`

const BtnEditar = styled.img`
    width: 10px;
    height: 10px;
    cursor: pointer;
`

function EditarLancamento({ lancamento }) {
    const [estaAberta, setAbrir] = useState(false);
    function abrirModal() {
        setAbrir(true)
    }
    function fecharModal() {
        setAbrir(false)
    }

    const [data, setData] = useState(lancamento.data);
    const [descricao, setDescricao] = useState(lancamento.descricao);
    const [categoria, setCategoria] = useState(lancamento.categoria);
    const [valor, setValor] = useState(lancamento.valor);

    async function editarLancamento(lancamento) {
        await patchLancamento(lancamento.id, lancamento);
    }

    async function submitFormulario() {
        if (data && categoria && valor) {
            await editarLancamento(modificaLancamento());
        } else {
            alert("Preencha todos os campos!");
        }
    }

    function modificaLancamento() {
        return {
            "id": lancamento.id,
            "data": data,
            "descricao": descricao,
            "categoria": categoria,
            "valor": parseFloat(valor)
        };
    }

    async function deletaLancamento() {
        if (window.confirm(`Deseja apagar ${descricao}?`)) {
            await deleteLancamento(lancamento.id);
        }
    }

    const [categorias, setCategorias] = useState([]);

    async function fetchCategorias() {
        const categoriasDaAPI = await getCategorias();
        setCategorias(categoriasDaAPI);
    }
    useEffect(() => {
        fetchCategorias()
    }, []);

    return (
        <div>
            <ModalContainer>
                <Modal
                    isOpen={estaAberta}
                    onRequestClose={fecharModal}
                    className="modal"
                >
                    <BarraSuperior>
                        <Botao onClick={fecharModal}>X</Botao>
                        <ContainerTexto>
                            <TituloSecundario>EDITAR LANÇAMENTO</TituloSecundario>
                        </ContainerTexto>
                    </BarraSuperior>
                    <Formulario>

                        <ContainerLabel>
                            <label>Data:</label>
                        </ContainerLabel>
                        <Input
                            type="date"
                            defaultValue={data}
                            onChange={evento => { setData(evento.target.value) }}
                        />
                        <ContainerLabel>
                            <label>Descrição:</label>
                        </ContainerLabel>
                        <Input
                            defaultValue={descricao}
                            type="text"
                            onChange={evento => { setDescricao(evento.target.value) }}
                        />
                        <ContainerLabel>
                            <label>Categoria:</label>
                        </ContainerLabel>
                        <SelectCategoria onChange={evento => { setCategoria(evento.target.value) }}>
                            <option hidden="hidden">Selecione</option>
                            {
                                categorias.map(categoria => (
                                    <option>
                                        {categoria.nome}
                                    </option>
                                ))
                            }
                        </SelectCategoria>
                        <ContainerLabel>
                            <label>Valor:</label>
                        </ContainerLabel>
                        <Input
                            defaultValue={valor}
                            type="number"
                            onChange={evento => { setValor(evento.target.value) }}
                        />

                        <ContainerBotoes>
                            <BtnSubmit type="submit" onClick={submitFormulario}>Editar</BtnSubmit>
                            <BtnApagar onClick={deletaLancamento}><Apagar src={ImagemApagar} /></BtnApagar>
                        </ContainerBotoes>
                    </Formulario>
                </Modal>
            </ModalContainer>
            <Botao onClick={abrirModal}><BtnEditar src={ImgEditar} /></Botao>

            {/* <ModalEditarLancamento
                onChangeData={evento => { setData(evento.target.value) }}
                onChangeDescricao={evento => { setDescricao(evento.target.value) }}
                onChangeCategoria={evento => { setCategoria(evento.target.value) }}
                onChangeValor={evento => { setValor(evento.target.value) }}
                submitForm={submitFormulario}
                botaoDeletar={deletaLancamento}
                dataPropriedade={data}
                descricaoPropriedade={descricao}
                categoriaPropriedade={categoria}
                valorPropriedade={valor}
            />  */}
        </div>
    )
}

export default EditarLancamento;