import { useEffect, useState } from 'react';
import { getCategorias, patchCategoria } from '../../services/categorias';

function CalculaDisponivel() {
    const [categorias, setCategorias] = useState([]);

    async function fetchCategorias() {
        const categoriasDaAPI = await getCategorias();
        setCategorias(categoriasDaAPI);
    }

    useEffect(() => {
        fetchCategorias();
    }, []);

    async function editaDisponivelCategoria(nomeCategoria, body) {
        await patchCategoria(nomeCategoria, body);
    }

    categorias.map(categoria => {
        const calculo = categoria.orcamento - categoria.gasto;

        if (categoria.disponivel != calculo) {
            editaDisponivelCategoria(categoria.nome, { "disponivel": calculo });
        }
    });
}

export default CalculaDisponivel;