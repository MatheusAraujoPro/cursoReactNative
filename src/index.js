//importando o express
const express = require('express');

//importando a lib mongose
const mongose = require('mongoose');

//importando o formatador de caminhos do node
const path = require('path')

//importando o cors
const cors = require('cors');

//criandp a aplicação
const app = express();

//fazendo com o app entenda tanto o protocolo http quanto o socket
const server = require('http').Server(app);
const io = require('socket.io')(server);

//criando a conexão com o banco
mongose.connect('mongodb+srv://admin:admin@cluster0-zpexf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});


//Deixando todas as rotas habilitadas para usar o io
app.use((req, res, next)=>{
    req.io = io;

    next();
})

//Deixando a api acessível por qualquer aplicação
app.use(cors());


//Rota de acesso as fotos salvas dentro das pastas da api
app.use('/files', express.static(path.resolve(__dirname, '..', 'upload', 'reseized')));

//usando as rotas
app.use(require( './routes'));

//porta de acesso a aplicação
server.listen(3333);

