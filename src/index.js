//importando o express
const express = require('express');

//importando a lib mongose
const mongose = require('mongoose');

//criando a conexão com o banco
mongose.connect('mongodb+srv://admin:admin@cluster0-zpexf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});


//criandp a aplicação
const app = express();

//usando as rotas
app.use(require( './routes'));

//porta de acesso a aplicação
app.listen(3333);

