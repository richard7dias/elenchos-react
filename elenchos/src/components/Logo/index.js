import logo from '../../img/ElenchosLogoBranco.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    height: 45px;
`

function Logo() {
    return (
        <LogoContainer>
            <Img src={logo} alt='Logo' />
        </LogoContainer>
    )
}

export default Logo;