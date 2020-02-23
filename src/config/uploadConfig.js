const multer = require('multer');
const path = require('path');

//Criando um objeto que salva a foto na pasta especificada com todas as suas informações
module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'upload'),
        filename(req, file, cb){

            cb(null, file.originalname);

        }
    })
};