// Armamos las Rutas
const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

// rutas CRUD
router.get('/', personaController.mostrarPersonas);
router.post('/', personaController.crearPersona);
router.get('/:id', personaController.obtenerPersona);
router.put('/:id', personaController.actualizarPersona);
router.delete('/:id', personaController.eliminarPersona);

module.exports = router;

