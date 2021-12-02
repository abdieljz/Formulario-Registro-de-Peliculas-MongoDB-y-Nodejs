const express = require('express');
const servidor = express();
const path = require('path');
const morgan = require('morgan');
const mongo = require('mongoose');
const ejs = require('ejs');

//conexion el servidor y la base de datos
mongo.connect('mongodb://localhost/ProyectoV2')
    .then(db => console.log('Conectividad a la base de datos'))
    .catch(err => console.log(err));

//importar rutas
const indexRutas = require('./routes/index');
//confi
servidor.set('port',process.env.PORT || 2909);
servidor.set('views', path.join(__dirname,'views'));
servidor.set('view engine','ejs');
//middlewares
servidor.use(morgan('dev'));
servidor.use(express.urlencoded({extended:false}));
//rutas
servidor.use('/',indexRutas);

//server start
servidor.listen(2909, () =>{
    console.log(`Server on port ${servidor.get('port')}`);
});