const configExpress = require('./config/configExpress');
const config = require('config');

//o configExpress é uma função que retorna nosso app configurado.
//chamando a função para obter o app configurado

app = configExpress();

//subindo o servidor na porta 3000 e assim que subir executar uma função
app.listen(config.get('api.port'), () =>{
    console.log('servidor rodando na porta 3000')
});