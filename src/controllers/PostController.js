//Importando o modelo da tabela de post
const Post = require('../models/Post');

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

