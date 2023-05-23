import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcoes = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Opcao = styled.li`
    font-size: 0.8rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    min-width: 130px;
    cursor: pointer;
    color: #fff;

    &:hover{
        background-color: #60CCC8;
        transition: .2s;
    }

    &:active {
        background-color: #99958f;
        transition: .2s;
    }
`

const textoOpcoes = ['HOME', 'MÊS ATUAL', 'REEMBOLSO', 'RELATÓRIOS', 'FLUXO DE CAIXA'];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link
                    style={{ textDecoration: 'none' }}
                    to={`/${texto
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase()
                        .replace(/ /g, '-')
                        }`
                    }>
                    <Opcao><p>{texto}</p></Opcao>
                </Link>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;