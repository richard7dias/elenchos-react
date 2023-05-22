const { Router } = require("express");
const { getLancamentos, getLancamento, postLancamento, patchLancamento, deleteLancamento } = require('../controllers/lancamentos');

const router = Router();

router.get('/', getLancamentos);

router.get('/:id', getLancamento);

router.post('/', postLancamento);

router.patch('/:id', patchLancamento);

router.delete('/:id', deleteLancamento);

module.exports = router;