//importando o express
const express = require('express')

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

