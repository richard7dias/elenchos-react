import styled from 'styled-components';
import TituloPrincipal from '../components/TituloPrincipal';
import TabelaSaldos from '../components/TabelaSaldos';
import TabelaFonteGastos from '../components/TabelaFonteGastos';
import CaixaHome from '../components/CaixaHome';
import NovaConta from '../components/NovaConta';
import NovaFonteGasto from '../components/NovaFonteGasto';

const AppContainer = styled.div`
  width: 100vw;
  height: 92.1vh;
  margin-top: 50px;
`

const ContainerTabelas = styled.div`
  max-width: 800px;
  display: flex;
  margin: 30px auto;
`

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: center;
`

function Home() {
  return (
    <AppContainer>
      <TituloPrincipal>Entradas x saídas e caixa atual</TituloPrincipal>
      <ContainerBotoes>
        <NovaConta />
        <NovaFonteGasto />
      </ContainerBotoes>
      <ContainerTabelas>
        <TabelaSaldos />
        <CaixaHome />
        <TabelaFonteGastos />
      </ContainerTabelas>
    </AppContainer>
  );
}

export default Home;
