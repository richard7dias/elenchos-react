import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import './estiloModal.css';
import TituloSecundario from '../TituloSecundario';
import Botao from '../Botao';
import BotaoMenu from '../BotaoMenu';
import { postSaldo } from '../../services/saldos';

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

function NovaConta() {
    const [estaAberta, setAbrir] = useState(false);
    const [conta, setConta] = useState("");
    const [valor, setValor] = useState("");

    function abrirModal() {
        setAbrir(true)
    }

    function fecharModal() {
        setAbrir(false)
    }

    async function inserSaldo(saldo) {
        await postSaldo(saldo);
        alert(`Conta ${saldo.conta} inserida com sucesso!`);
    }

    function SubmitFormulario() {
        if (conta && valor) {
            const saldo = {
                "conta": conta,
                "valorSaldo": parseFloat(valor)
            };
            inserSaldo(saldo);
        } else {
            alert("Preencha todos os campos!");
        }
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
                            <TituloSecundario>NOVA CONTA</TituloSecundario>
                        </ContainerTexto>
                    </BarraSuperior>
                    <Formulario>
                        <ContainerLabel><label>Nome da conta:</label></ContainerLabel>
                        <Input type="text" onChange={evento => {
                            setConta(evento.target.value);
                        }} />
                        <ContainerLabel><label>Valor:</label></ContainerLabel>
                        <Input type="number" onChange={evento => {
                            setValor(evento.target.value);
                        }} />
                        <BtnSubmit type="submit" onClick={SubmitFormulario}>Adicionar</BtnSubmit>
                    </Formulario>
                </Modal>
            </ModalContainer>
            <BotaoMenu onClick={abrirModal}>NOVA CONTA</BotaoMenu>
        </div>
    )
}

export default NovaConta;