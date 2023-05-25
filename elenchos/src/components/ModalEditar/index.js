import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import './estiloModal.css';
import TituloSecundario from '../TituloSecundario';
import Botao from '../Botao';
import ImgEditar from '../../img/pen-solid.png';
import ImagemApagar from '../../img/trash-solid.png';

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

function ModalEditar({ titulo, labelTexto, onChangeTexto, labelNumero, onChangeNumero, submitForm, botaoDeletar, textoPropriedade, numeroPropriedade }) {
    const [estaAberta, setAbrir] = useState(false);

    function abrirModal() {
        setAbrir(true)
    }

    function fecharModal() {
        setAbrir(false)
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
                            <TituloSecundario>{titulo}</TituloSecundario>
                        </ContainerTexto>
                    </BarraSuperior>
                    <Formulario>
                        <ContainerLabel>
                            <label>{labelTexto}</label>
                        </ContainerLabel>
                        <Input
                            type="text"
                            defaultValue={textoPropriedade}
                            onChange={onChangeTexto}
                        />
                        <ContainerLabel>
                            <label>{labelNumero}</label>
                        </ContainerLabel>
                        <Input
                            defaultValue={numeroPropriedade}
                            type="number"
                            onChange={onChangeNumero}
                        />
                        <ContainerBotoes>
                            <BtnSubmit type="submit" onClick={submitForm}>Editar</BtnSubmit>
                            <BtnApagar onClick={botaoDeletar}><Apagar src={ImagemApagar} /></BtnApagar>
                        </ContainerBotoes>
                    </Formulario>
                </Modal>
            </ModalContainer>
            <Botao onClick={abrirModal}><BtnEditar src={ImgEditar} /></Botao>
        </div>
    )
}

export default ModalEditar;