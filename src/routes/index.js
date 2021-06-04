const router = require('express').Router();
const TabelaAgendamento = require('./TabelaAgendamento');

router.use('/', async (req, resp) => {
    const result = await TabelaAgendamento.listar();
    resp.send(JSON.stringify(results));

});
module.exports = router;