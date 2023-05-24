import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import './estiloModal.css';
import TituloSecundario from '../TituloSecundario';
import Botao from '../Botao';
import ImgEditar from '../../img/pen-solid.png';
import ImagemApagar from '../../img/trash-solid.png';
import { deleteFonteGasto, patchFonteGasto } from '../../services/fonteGastos';

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

function EditarFonteGasto({ descricaoProp, valorProp }) {
    const [estaAberta, setAbrir] = useState(false);
    const [descricao, setDescricao] = useState(descricaoProp);
    const [valor, setValor] = useState(valorProp);

    function abrirModal() {
        setAbrir(true)
    }

    function fecharModal() {
        setAbrir(false)
    }

    async function editaFonteGasto(fonteGasto) {
        await patchFonteGasto(descricaoProp, fonteGasto);
        alert(`Conta ${descricaoProp} editada com sucesso!`);
    }

    async function SubmitFormulario() {
        if (descricao && valor) {
            await editaFonteGasto(CriaFonteGasto());
        } else {
            alert("Preencha todos os campos!");
        }
    }

    function CriaFonteGasto() {
        const fonteGasto = {
            "descricao": descricao,
            "valorGasto": parseFloat(valor)
        };
        return fonteGasto
    }

    async function deletaFonteGasto() {
        await deleteFonteGasto(CriaFonteGasto().descricao);
        alert(`Fonte de gastos ${descricao} apagada com sucesso!`);
    }

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
                            <TituloSecundario>EDITAR FONTE DE GASTO</TituloSecundario>
                        </ContainerTexto>
                    </BarraSuperior>
                    <Formulario>
                        <ContainerLabel>
                            <label>Descrição da fonte de gasto:</label>
                        </ContainerLabel>
                        <Input
                            type="text"
                            defaultValue={descricaoProp}
                            onChange={evento => {
                                setDescricao(evento.target.value);
                            }}
                        />
                        <ContainerLabel>
                            <label>Valor:</label>
                        </ContainerLabel>
                        <Input
                            defaultValue={valorProp}
                            type="number"
                            onChange={evento => {
                                setValor(evento.target.value);
                            }}
                        />
                        <ContainerBotoes>
                            <BtnSubmit type="submit" onClick={SubmitFormulario}>Editar</BtnSubmit>
                            <BtnApagar onClick={deletaFonteGasto}><Apagar src={ImagemApagar} /></BtnApagar>
                        </ContainerBotoes>
                    </Formulario>
                </Modal>
            </ModalContainer>
            <Botao onClick={abrirModal}><BtnEditar src={ImgEditar} /></Botao>
        </div>
    )
}

export default EditarFonteGasto;