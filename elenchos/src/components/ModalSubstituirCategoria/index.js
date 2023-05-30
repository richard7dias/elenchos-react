import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Botao from '../Botao';
import TituloSecundario from '../TituloSecundario';
import BotaoMenu from '../BotaoMenu';
import './estiloModal.css';

const ModalContainer = styled.div`
    position: relative;
`

function ModalSubstituirCategoria() {
    const [estaAberta, setAbrir] = useState(true);

    function abrirModal() {
        setAbrir(true)
    }

    function fecharModal() {
        setAbrir(false)
    }

    return (
        <ModalContainer>
            <Modal
                isOpen={estaAberta}
                onRequestClose={fecharModal}
                className="modal"
            >
                <p>Teste</p>
            </Modal>
        </ModalContainer>
    )
}

export default ModalSubstituirCategoria;