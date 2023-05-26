import { useState } from 'react';
import { deleteFonteGasto, patchFonteGasto } from '../../services/fonteGastos';
import ModalEditar from '../ModalEditar';

function EditarFonteGasto({ descricaoProp, valorProp }) {
    const [descricao, setDescricao] = useState(descricaoProp);
    const [valor, setValor] = useState(valorProp);

    async function editaFonteGasto(fonteGasto) {
        await patchFonteGasto(descricaoProp, fonteGasto);
        alert(`Conta ${descricaoProp} editada com sucesso!`);
    }

    async function submitFormulario() {
        if (descricao && valor) {
            await editaFonteGasto(criaFonteGasto());
        } else {
            alert("Preencha todos os campos!");
        }
    }

    function criaFonteGasto() {
        const fonteGasto = {
            "descricao": descricao,
            "valorGasto": parseFloat(valor)
        };
        return fonteGasto
    }

    async function deletaFonteGasto() {
        if (window.confirm(`Deseja apagar ${descricao}?`)) {
            await deleteFonteGasto(criaFonteGasto().descricao);
        }
    }

    return (
        <div>
            <ModalEditar
                titulo="EDITAR FONTE DE GASTO"
                labelTexto="Descrição da fonte de gasto:"
                onChangeTexto={evento => { setDescricao(evento.target.value) }}
                labelNumero="Valor:"
                onChangeNumero={evento => { setValor(evento.target.value) }}
                submitForm={submitFormulario}
                botaoDeletar={deletaFonteGasto}
                textoPropriedade={descricaoProp}
                numeroPropriedade={valorProp}
            />
        </div>
    )
}

export default EditarFonteGasto;