const mongoose = require('mongoose');

const carritoDeCompraSchema = mongoose.Schema({
    cantidadCompra:{
        type: Number,
        required: true
    },
    precioCompra:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('CarritoDeCompras', carritoDeCompraSchema );