import { useEffect, useState } from 'react';
import { getCategorias } from '../../services/categorias';

export default function SomaTotais(coluna) {
    const [categorias, setCategorias] = useState([]);

    async function fetchCategorias() {
        const categoriasDaAPI = await getCategorias();
        setCategorias(categoriasDaAPI);
    }

    useEffect(() => {
        fetchCategorias()
    }, []);

    let soma = 0;
    categorias.map(categoria => (
        soma += categoria[coluna]
    ));
    return soma;
}