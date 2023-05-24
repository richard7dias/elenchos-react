import SomaFonteGastos from './SomaFonteGastos';
import SomaSaldos from './SomaSaldos';

export default function CalculaCaixa() {
    return SomaSaldos() - SomaFonteGastos();
}