import styled from 'styled-components';
import Botao from '../Botao';
import { postSaldo } from '../../services/saldos';

const Linha = styled.tr`
    border-collapse: collapse;
    font-size: 0.8rem;
`

const Descricao = styled.td`
    background-color: #99958f;
    color: white;
`

const Dinheiro = styled.td`
    text-align: end;
`

const NovaDescricao = styled.input`
    background-color: #99958f;
    border: none;
    color: white;
`

const NovoValor = styled.input`
    background-color: white;
    border: none;
    width: 100%;
    text-align: end;
`

function InserirSaldo() {
    async function inserSaldo(novoSaldo) {
        await postSaldo(novoSaldo);
        alert(`Conta ${novoSaldo.conta} inserida com sucesso!`);
    }

    let contaDigitada = "";
    let valorDigitado = "";

    return (
        <Linha>
            <Descricao><Botao>x</Botao>
                <NovaDescricao onBlur={evento => {
                    contaDigitada = evento.target.value;
                }}
                />
            </Descricao>
            <Dinheiro><NovoValor onBlur={evento => {
                valorDigitado = evento.target.value;

                if (contaDigitada && valorDigitado) {
                    const saldo = {
                        "conta": contaDigitada,
                        "valorSaldo": parseFloat(valorDigitado)
                    };
                    inserSaldo(saldo);
                } else {
                    alert("Preencha todos os campos!");
                }
            }} /></Dinheiro>
        </Linha >
    );
}

export default InserirSaldo;