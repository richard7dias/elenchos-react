import { useEffect, useState } from 'react';
import { deleteCategoria, patchCategoria } from '../../services/categorias';
import ModalEditar from '../ModalEditar';
import { getLancamentos, patchLancamento } from '../../services/lancamentos';
import ModalSubstituirCategoria from '../ModalSubstituirCategoria';

function EditarCategoria({ nomeProp, orcamentoProp }) {
    const [nome, setNome] = useState(nomeProp);
    const [orcamento, setOrcamento] = useState(orcamentoProp);
    const [lancamentos, setLancamentos] = useState([]);

    async function fetchLancamentos() {
        const lancamentosDaAPI = await getLancamentos();
        setLancamentos(lancamentosDaAPI);
    }

    useEffect(() => {
        fetchLancamentos();
    }, []);

    async function editaLancamento(id, body) {
        await patchLancamento(id, body);
    }

    async function editaCategoria(categoria) {
        await patchCategoria(nomeProp, categoria);
        alert(`Conta ${nomeProp} editada com sucesso!`);
    }

    async function submitFormulario() {
        if (nome && orcamento) {
            if (existeLancamentosCategoria()) {
                mudarCategoriaLancamentos();
            }
            await editaCategoria(criaCategoria());
        } else {
            alert("Preencha todos os campos!");
        }
    }

    function mudarCategoriaLancamentos() {
        lancamentos.map(lancamento => {
            if (lancamento.categoria == nomeProp) {
                editaLancamento(lancamento.id, { "categoria": nome });
            }
        });
    }

    function existeLancamentosCategoria() {
        return lancamentos.filter(lancamento => lancamento.categoria == nomeProp);
    }

    function criaCategoria() {
        const categoria = {
            "nome": nome,
            "orcamento": parseFloat(orcamento)
        };
        return categoria
    }

    //async
    function deletaCategoria() {
        if (window.confirm(`Deseja apagar ${nome}?`)) {
            if (existeLancamentosCategoria()) {
                ModalSubstituirCategoria();
            }
            //await deleteCategoria(criaCategoria().nome);
        }
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