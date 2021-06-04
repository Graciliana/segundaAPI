const ModeloTabelaAgendamento = require('../models/agendamentos/modelTabelaAgendamento');

ModeloTabelaAgendamento.sync()
    .then(() => {
        console.log('Tabela criada com sucesso');
    })
    .catch(
        console.log('Erro, tabela não criada')
    );