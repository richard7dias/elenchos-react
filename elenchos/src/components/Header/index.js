import styled from 'styled-components';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import CalculaCaixa from '../CalculaCaixa';


const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #387876;
    border-bottom: 4px solid #99958f;
`

const CaixaAtual = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 110px;
    height: 30px;
    margin: 8px 0 0 50px;
    font-size: 0.8rem;
    font-weight: bold;
    color: #387876;
    background-color: white;
    border-radius: 20px;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <CaixaAtual>
                <CalculaCaixa />
            </CaixaAtual>
        </HeaderContainer>
    );
}

export default Header;