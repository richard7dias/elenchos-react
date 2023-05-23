import styled from 'styled-components';
import TituloPrincipal from '../components/TituloPrincipal';

const AppContainer = styled.div`
  width: 100vw;
  height: 92.1vh;
  margin-top: 50px;
`

function Reembolso() {
    return (
        <AppContainer>
            <TituloPrincipal>Reembolso</TituloPrincipal>
        </AppContainer>
    );
}

export default Reembolso;
