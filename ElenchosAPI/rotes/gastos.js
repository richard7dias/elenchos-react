const { Router } = require("express");
const { getGastos, getGasto, postGasto, patchGasto, deleteGasto } = require('../controllers/gastos');

const router = Router();

router.get('/', getGastos);

router.get('/:descricao', getGasto);

router.post('/', postGasto);

router.patch('/:descricao', patchGasto);

router.delete('/:descricao', deleteGasto);

module.exports = router;