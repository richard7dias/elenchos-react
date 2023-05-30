import styled from 'styled-components';
import SomaFonteGastos from '../CaixaHome/SomaFonteGastos';
import SomaSaldos from '../CaixaHome/SomaSaldos';

const Negativo = styled.p`
    color: #903B33;
    background-color: white;
    border-radius: 20px;
    padding: 5px 25px;
`

function CalculaCaixa() {
    let caixa = SomaSaldos() - SomaFonteGastos()

    if (caixa < 0) {
        return (
            <Negativo>R$ {caixa}</Negativo>
        )
    } else {
        return (
            <p>R$ {caixa}</p>
        )
    }
}

export default CalculaCaixa;