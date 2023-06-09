import styled from 'styled-components';
import TituloPrincipal from '../components/TituloPrincipal';
import nomeMesAtual from '../components/Datas/mesAtual';
import NovaCategoria from '../components/NovaCategoria';
import TabelaCategorias from '../components/TabelaCategorias';

const AppContainer = styled.div`
  width: 100vw;
  height: 92.1vh;
  margin-top: 50px;
`

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: center;
`

function Orcamento() {

  return (
    <AppContainer>
      <TituloPrincipal>Orçamento de {nomeMesAtual()}</TituloPrincipal>
      <ContainerBotoes>
        <NovaCategoria />
      </ContainerBotoes>
      <TabelaCategorias />
    </AppContainer>
  );
}

export default Orcamento;
