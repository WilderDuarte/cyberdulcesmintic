const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    nombreProducto:{
        type: String,
        required: true
    },
    idCategoria:{
        type: String,
        required: true
    },
    precioProducto:{
        type: Number,
        required: true
    },
    descripcionProducto:{
        type: String,
        required: true
    },
    cantidadSaldo:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Producto', productoSchema );
