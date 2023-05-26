import { useEffect, useState } from 'react';
import { getLancamentos } from '../../services/lancamentos';
import { getCategorias, patchCategoria } from '../../services/categorias';
import { anoAtual, mesAtual } from '../Datas/mesAtual';

function CalculaGasto() {
    const [lancamentos, setLancamentos] = useState([]);

    async function fetchLancamentos() {
        const lancamentosDaAPI = await getLancamentos();
        setLancamentos(lancamentosDaAPI);
    }

    useEffect(() => {
        fetchLancamentos();
    }, []);

    const [categorias, setCategorias] = useState([]);

    async function fetchCategorias() {
        const categoriasDaAPI = await getCategorias();
        setCategorias(categoriasDaAPI);
    }

    useEffect(() => {
        fetchCategorias();
    }, []);

    async function editaGastoCategoria(nomeCategoria, body) {
        await patchCategoria(nomeCategoria, body);
    }

    categorias.map(categoria => {
        const filtrados = lancamentos
            .filter(lancamento =>
                lancamento.data.substring(0, 4) == anoAtual.toString()
                && lancamento.data.substring(5, 7) == mesAtual
                && lancamento.categoria == categoria.nome
            );

        let soma = 0;
        filtrados.map(lancamento => {
            soma += lancamento.valor;
        })

        const body = {
            "gasto": soma
        }

        if (categoria.gasto != soma) {
            editaGastoCategoria(categoria.nome, body);
        }
    });
}

export default CalculaGasto;