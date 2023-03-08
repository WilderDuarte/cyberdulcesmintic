const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    categoriaPersona:{
        type: String,
        required: true
    },
    nombrePersona:{
        type: String,
        required: true
    },
    apellidoPersona:{
        type: String,
        required: true
    },
    telefonoPersona:{
        type: String,
        required: true
    },
    ciudadPersona:{
        type: String,
        required: true
    },
    direccionPersona:{
        type: String,
        required: true
    },
    emailPersona:{
        type: String,
        required: true
    },
    passwordPersona:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Persona', personaSchema );