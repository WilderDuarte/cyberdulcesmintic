// Armamos las Rutas para  nuestro producto

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// rutas CRUD

router.get('/', usuarioController.mostrarUsuarios);
router.post('/', usuarioController.crearUsuario);
router.get('/:id', usuarioController.obtenerUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;


