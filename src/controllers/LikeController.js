//Importando o modelo da tabela de post
const Post = require('../models/Post');

//Criando um objeto que vai ser responsável pelo acesso ao BD
module.exports = {  

    //Método responsável por salvar os likes no post especificado
    async Storage(req, res){

        const post = await Post.findById(req.params.id);

        post.like += 1;

        await post.save();
        
        return res.json(post);
    },
}

