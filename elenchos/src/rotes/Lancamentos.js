import styled from 'styled-components';
import TituloPrincipal from '../components/TituloPrincipal';
import mesAtual from '../components/DataAtual';
import FormLancar from '../components/FormLancar';
import TabelaLancamentos from '../components/TabelaLancamentos';

const AppContainer = styled.div`
  width: 100vw;
  height: 92.1vh;
  margin-top: 50px;
`

function Lancamentos() {
    return (
        <AppContainer>
            <TituloPrincipal>Lançamentos de Gastos</TituloPrincipal>
            <FormLancar/>
            <TabelaLancamentos/>
        </AppContainer>
    );
}

export default Lancamentos;
