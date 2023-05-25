import { useState } from 'react';
import { deleteCategoria, patchCategoria } from '../../services/categorias';
import ModalEditar from '../ModalEditar';

function EditarCategoria({ nomeProp, orcamentoProp }) {
    const [nome, setNome] = useState(nomeProp);
    const [orcamento, setOrcamento] = useState(orcamentoProp);

    async function editaCategoria(categoria) {
        await patchCategoria(nomeProp, categoria);
        alert(`Conta ${nomeProp} editada com sucesso!`);
    }

    async function submitFormulario() {
        if (nome && orcamento) {
            await editaCategoria(criaCategoria());
        } else {
            alert("Preencha todos os campos!");
        }
    }

    function criaCategoria() {
        const categoria = {
            "nome": nome,
            "orcamento": parseFloat(orcamento)
        };
        return categoria
    }

    async function deletaCategoria() {
        await deleteCategoria(criaCategoria().nome);
        alert(`Categoria ${nome} apagada com sucesso!`);
    }

    return (
        <div>
            <ModalEditar
                titulo="EDITAR CATEGORIA"
                labelTexto="Nome da categoria:"
                onChangeTexto={evento => { setNome(evento.target.value) }}
                labelNumero="Orçamento:"
                onChangeNumero={evento => { setOrcamento(evento.target.value) }}
                submitForm={submitFormulario}
                botaoDeletar={deletaCategoria}
                textoPropriedade={nomeProp}
                numeroPropriedade={orcamentoProp}
            />
        </div>
    )
}

export default EditarCategoria;