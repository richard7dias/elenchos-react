import { useState } from 'react';
import { postFonteGasto } from '../../services/fonteGastos';
import ModalAdicionar from '../ModalAdicionar';

function NovaFonteGasto() {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    async function inserFonteGasto(fonteGasto) {
        await postFonteGasto(fonteGasto);
        alert(`Fonte de gasto ${fonteGasto.descricao}, inserida com sucesso!`);
    }

    function submitFormulario() {
        if (descricao && valor) {
            const fonteGasto = {
                "descricao": descricao,
                "valorGasto": parseFloat(valor)
            };
            inserFonteGasto(fonteGasto);
        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <div>
            <ModalAdicionar
                titulo="NOVA FONTE DE GASTO"
                labelTexto="Descrição da fonte de gasto:"
                onChangeTexto={evento => { setDescricao(evento.target.value) }}
                labelNumero="Valor:"
                onChangeNumero={evento => { setValor(evento.target.value) }}
                submitForm={submitFormulario}
                textoBotao="NOVA FONTE DE GASTO"
            />
        </div>
    )
}

export default NovaFonteGasto;