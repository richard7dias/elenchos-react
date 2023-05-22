const { Router } = require("express");
const { getFonteGastos, getFonteGasto, postFonteGasto, patchFonteGasto, deleteFonteGasto } = require('../controllers/fonteGastos');

const router = Router();

router.get('/', getFonteGastos);

router.get('/:descricao', getFonteGasto);

router.post('/', postFonteGasto);

router.patch('/:descricao', patchFonteGasto);

router.delete('/:descricao', deleteFonteGasto);

module.exports = router;