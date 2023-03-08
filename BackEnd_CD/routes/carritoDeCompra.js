const express = require('express');
const router = express.Router();
const carritoDeCompraController = require('../controllers/carritoDeCompraController');

// rutas CRUD
router.get('/', carritoDeCompraController.mostrarCarritoDeCompras);
router.post('/', carritoDeCompraController.crearCarritoDeCompra);
router.get('/:id', carritoDeCompraController.obtenerCarritoDeCompra);
router.put('/:id', carritoDeCompraController.actualizarCarritoDeCompra);
router.delete('/:id', carritoDeCompraController.eliminarCarritoDeCompra);

module.exports = router;