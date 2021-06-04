const router = require('express').Router();
const TabelaAgendamento = require('./TabelaAgendamento');
const Agendamento = require('./Agendamento');

router.get('/agendamentos', async (req, resp) => {
    const results = await TabelaAgendamento.listar();
    resp.send(JSON.stringify(results));
});

router.use('/', async (req, resp) => {
    const result = await TabelaAgendamento.listar();
    resp.send(JSON.stringify(results));

});
module.exports = router;