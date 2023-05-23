import SomaFonteGastos from './SomaFonteGastos';
import SomaSaldos from './SomaSaldos';

export function CalculaCaixa() {
    return SomaSaldos() - SomaFonteGastos();
}

export default CalculaCaixa;