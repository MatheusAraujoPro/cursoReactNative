//Importando o modelo da tabela de post
const Post = require('../models/Post');
//Importando o modulo de manupulação de imagens Sharp
const sharp = require('sharp');
//Importando o formatador de caminhos do node
const path = require('path');
//Importando o sistema de arquivos do node
const fs = require('fs')


//Criando um objeto que vai ser responsável pelo acesso ao BD
module.exports = {
    //Método assíncrono Index, responsável por listar os posts do banco
    async index(req, res){

        //retorna os todos os posts em ordem decrescente de criação
        const posts = await Post.find().sort('-createdAt')

        return res.json(posts);

    },

    //Método responsável por salvar os posts no BD
    async Storage(req, res){
        const {author, place, description, hashtags} = req.body;
        const {filename: image} = req.file;

        //Redimensionando a imagem
        await sharp(req.file.path)
        .resize(500)
        .jpeg({quality: 70})
        .toFile(

            path.resolve(req.file.destination, 'reseized', image)            
        )

        //Deletar a imagem original 
        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            
            author,
            place,
            description,
            hashtags,
            image,
        });


        return res.json(post);
    },
}

