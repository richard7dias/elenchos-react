import styled from 'styled-components';
import TituloPrincipal from '../components/TituloPrincipal';

const AppContainer = styled.div`
  width: 100vw;
  height: 92.1vh;
  margin-top: 50px;
`

function MesAtual() {
  return (
    <AppContainer>
      <TituloPrincipal>Mes atual</TituloPrincipal>
    </AppContainer>
  );
}

export default MesAtual;
