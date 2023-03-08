// Armamos las Rutas
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');


// rutas CRUD
router.get('/', categoriaController.mostrarCategorias);
router.post('/', categoriaController.crearCategoria);
router.get('/:id', categoriaController.obtenerCategoria);
router.put('/:id', categoriaController.actualizarCategoria);
router.delete('/:id', categoriaController.eliminarCategoria);

module.exports = router;