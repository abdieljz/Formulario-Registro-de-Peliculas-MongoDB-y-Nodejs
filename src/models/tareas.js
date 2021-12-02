const mongoose = require('mongoose');
//como vana  lucir los daots
const Schema = mongoose.Schema;

const TaskSchema  = new Schema({

    Titulo: String,
    Direccion: String,
    Anio: String,
    Duracion: String,
    Genero: String,
    Productora: String,
    Sinopsis: String,
    status:{
        type: Boolean,
        default: false
    }          
    
});

module.exports = mongoose.model('peliculas',TaskSchema);