const { Router } = require("express");
const { getCategorias, getCategoria, postCategoria, patchCategoria, deleteCategoria } = require('../controllers/categorias');


const router = Router();

router.get('/', getCategorias);

router.get('/:nome', getCategoria);

router.post('/', postCategoria);

router.patch('/:nome', patchCategoria);

router.delete('/:nome', deleteCategoria);

module.exports = router;