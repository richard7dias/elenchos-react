import { useState } from 'react';
import { postSaldo } from '../../services/saldos';
import ModalAdicionar from '../ModalAdicionar';

function NovaConta() {
    const [conta, setConta] = useState("");
    const [valor, setValor] = useState("");

    async function inserSaldo(saldo) {
        await postSaldo(saldo);
        alert(`Conta ${saldo.conta} inserida com sucesso!`);
    }

    function submitFormulario() {
        if (conta && valor) {
            const saldo = {
                "conta": conta,
                "valorSaldo": parseFloat(valor)
            };
            inserSaldo(saldo);
        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <div>
            <ModalAdicionar
                titulo="NOVA CONTA"
                labelTexto="Nome da conta:"
                onChangeTexto={evento => { setConta(evento.target.value) }}
                labelNumero="Valor:"
                onChangeNumero={evento => { setValor(evento.target.value) }}
                submitForm={submitFormulario}
                textoBotao="NOVA CONTA"
            />
        </div>
    )
}

export default NovaConta;