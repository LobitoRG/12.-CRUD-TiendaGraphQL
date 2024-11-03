const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombreCompleto: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true }, // Cambiado a String
    fechaRegistro: { type: Date, default: Date.now }, // Fecha actual generada por el sistema
    tipoUsuario: {
        type: String,
        enum: ['cliente', 'usuario'], // Nombres en mayúsculas para el enum
        required: true
    },
    metodoPagoPreferido: {
        type: String,
        enum: ['tarjeta', 'paypal'], // Nombres en mayúsculas para el enum
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
