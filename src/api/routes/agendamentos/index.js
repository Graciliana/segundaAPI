const router = require('express').Router;

router.use('/agendamentos', (req, resp) => {
    resp.send('ok');

} );

module.exports = router;