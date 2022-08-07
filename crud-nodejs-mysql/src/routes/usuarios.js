const express = require('express');
//guardaremos las rutas más comunes para que los usuarios las usen
const router = express.Router();

const usuarioControlador = require('../controllers/usuarioControlador');
//todas las rutas del servidor ; operaciones CRUD
router.get('/', usuarioControlador.list);
router.post('/add',usuarioControlador.save);
router.get('/delete/:id', usuarioControlador.delete);
router.get('/update/:id', usuarioControlador.edit);
router.post('/update/:id', usuarioControlador.update);

//exportar las rutas
module.exports = router;