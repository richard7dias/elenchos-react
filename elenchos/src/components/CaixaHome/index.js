import styled from 'styled-components';
import TituloSecundario from '../TituloSecundario';
import CalculaCaixa from '../CalculaCaixa';

const CaixaAtual = styled.div`
    display: flex;
    color: white;
    background-color: #387876;
    border-radius: 20px;
    min-width: 130px;
    height: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 50px;
    font-weight: bold;
    font-size: 0.9rem;
`

function CaixaHome() {
    return (
        <div>
            <TituloSecundario>CAIXA ATUAL</TituloSecundario>
            <CaixaAtual>
                <CalculaCaixa />
            </CaixaAtual>
        </div>
    );
}

export default CaixaHome;