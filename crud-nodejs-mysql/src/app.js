// encargado de ejecutar todo el servidor
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
//importando rutas desde routes/usuarios.js
const usuariosRutas = require('./routes/usuarios');
const { urlencoded } = require('express');

//settings
//configurar express
app.set('port', process.env.PORT || 3000);
//configuración del motor de plantillas
app.set('view engine','ejs');
//comunicar a js donde está views
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user:'root',
    password: 'admin',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));
//desde el modulo de express se requiere un método 
//que permite poder entender 
//todos los datos que vengan desde un formulario
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', usuariosRutas);

//archivos estáticos
app.use(express.static(path.join(__dirname,'public')));

//inicializar el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
