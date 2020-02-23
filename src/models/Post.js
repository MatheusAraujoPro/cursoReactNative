//criando um modelo de post para o banco(tabela)

//importando mongoose
const mongoose = require('mongoose');

//Criando o esquema da tabela
const PostSchema = new mongoose.Schema({

    author       : String,
    place        : String,
    description  : String,
    hashTags     : String,
    image        : String,
    like: {
        type     : Number,
        default:0,
    }


}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);