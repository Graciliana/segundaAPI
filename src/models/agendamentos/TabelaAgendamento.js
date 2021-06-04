const Modelo = require('./modelTabelaAgendamento');

module.exports = {
    async listar(){
        return await modeloAgendamento.findAll();
    },
    async adicionar(agendamento) {
        return await modeloAgendamento.create(agendamento);
    },
    async buscarPorPK(id){
        agendamento = await modeloAgendamento.findByPk(id);

        return agendamento
    },
    async atualizar(id, dados){
        return await modeloAgendamento.update(
            dados,
                {
                    where: {
                        id: id
                    }
                }
        );
    },
    async removeEventListener(id) {
        return await modeloAgendamento.destroy(
            {
                where: {
                    id: id
                }
            }
        );
    }
};
