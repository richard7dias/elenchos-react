import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import './estiloModal.css';
import TituloSecundario from '../TituloSecundario';
import Botao from '../Botao';
import BotaoMenu from '../BotaoMenu';

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

const BtnSubmit = styled.button`
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    color: #fff;
    background-color: #387876;
    border: none;
    margin-top: 20px;
    width: 100%;
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

function NovaFonteGasto() {
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
                            <TituloSecundario>NOVA FONTE DE GASTO</TituloSecundario>
                        </ContainerTexto>
                    </BarraSuperior>
                    <Formulario onSubmit={fecharModal}>
                        <ContainerLabel><label>Descrição da fonte de gasto:</label></ContainerLabel>
                        <Input type="text"></Input>
                        <ContainerLabel><label>Valor:</label></ContainerLabel>
                        <Input type="number"></Input>
                        <BtnSubmit type="submit">Adicionar</BtnSubmit>
                    </Formulario>
                </Modal>
            </ModalContainer>
            <BotaoMenu onClick={abrirModal}>NOVA FONTE DE GASTO</BotaoMenu>
        </div>
    )
}

export default NovaFonteGasto;