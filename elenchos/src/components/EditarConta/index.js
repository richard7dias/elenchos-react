import { useState } from 'react';
import { deleteSaldo, patchSaldo } from '../../services/saldos';
import ModalEditar from '../ModalEditar';

function EditarConta({ contaProp, valorProp }) {
    const [conta, setConta] = useState(contaProp);
    const [valor, setValor] = useState(valorProp);

    async function editaSaldo(saldo) {
        await patchSaldo(contaProp, saldo);
        alert(`Conta ${contaProp} editada com sucesso!`);
    }

    async function submitFormulario() {
        if (conta && valor) {
            await editaSaldo(criaSaldo());
        } else {
            alert("Preencha todos os campos!");
        }
    }

    function criaSaldo() {
        const saldo = {
            "conta": conta,
            "valorSaldo": parseFloat(valor)
        };
        return saldo
    }

    async function deletaSaldo() {
        await deleteSaldo(criaSaldo().conta);
        alert(`Conta ${conta} apagada com sucesso!`);
    }

    return (
        <div>
            <ModalEditar
                titulo="EDITAR CONTA"
                labelTexto="Nome da conta:"
                onChangeTexto={evento => { setConta(evento.target.value) }}
                labelNumero="Valor:"
                onChangeNumero={evento => { setValor(evento.target.value) }}
                submitForm={submitFormulario}
                botaoDeletar={deletaSaldo}
                textoPropriedade={contaProp}
                numeroPropriedade={valorProp}
            />
        </div>
    )
}

export default EditarConta;