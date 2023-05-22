const { Router } = require("express");
const { getSaldos, getSaldo, postSaldo, patchSaldo, deleteSaldo } = require('../controllers/saldos');

const router = Router();

router.get('/', getSaldos);

router.get('/:conta', getSaldo);

router.post('/', postSaldo);

router.patch('/:conta', patchSaldo);

router.delete('/:conta', deleteSaldo);

module.exports = router;