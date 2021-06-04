const Modelo = require('./modelTabelaAgendamento');

module.exports = {
    listar(){
        return Modelo.findAll();
    }
};