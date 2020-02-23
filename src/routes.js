//importando o express
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uploadConfig');

//importando o controller
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const upload = multer(uploadConfig); 


//criando um objeto express do tipo router
const routes = new express.Router();


//criand a rota padrão
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image') ,PostController.Storage);
routes.post('/posts/:id/like', LikeController.Storage);


    
  
//exportando as rotas
module.exports = routes;


