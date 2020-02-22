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

//criando uma rota para aplicação
app.get('/', (req, res)=>{
    
    //Resposta simples de hello world
    //return res.send('Hello World')

    //Usando variável dentro da string(por parâmetro na URL)
    return res.send(`Olá ${req.query.name}` );
});

//porta de acesso a aplicação
app.listen(3333);

