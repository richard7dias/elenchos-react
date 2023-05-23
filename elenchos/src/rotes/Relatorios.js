import styled from 'styled-components';
import TituloPrincipal from '../components/TituloPrincipal';

const AppContainer = styled.div`
  width: 100vw;
  height: 92.1vh;
  margin-top: 50px;
`

function Relatorios() {
    return (
        <AppContainer>
            <TituloPrincipal>Relatorios</TituloPrincipal>
        </AppContainer>
    );
}

export default Relatorios;