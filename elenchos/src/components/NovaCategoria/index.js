import { useState } from 'react';
import { postCategoria } from '../../services/categorias';
import ModalAdicionar from '../ModalAdicionar';

function NovaCategoria() {
    const [nome, setNome] = useState("");
    const [orcamento, setOrcamento] = useState("");

    async function insereCategoria(categoria) {
        await postCategoria(categoria);
        alert(`Categoria ${categoria.nome} inserida com sucesso!`);
    }

    function submitFormulario() {
        if (nome && orcamento) {
            const categoria = {
                "nome": nome,
                "orcamento": parseFloat(orcamento)
            };
            insereCategoria(categoria);
        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <div>
            <ModalAdicionar
                titulo="NOVA CATEGORIA"
                labelTexto="Nome da categoria"
                onChangeTexto={evento => { setNome(evento.target.value); }}
                labelNumero="Orçamento"
                onChangeNumero={evento => { setOrcamento(evento.target.value); }}
                submitForm={submitFormulario}
                textoBotao="NOVA CATEGORIA"
            />
        </div>
    )
}

export default NovaCategoria;