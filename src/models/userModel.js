const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombreCompleto: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true }, 
    fechaRegistro: { type: Date, default: Date.now }, 
    tipoUsuario: {
        type: String,
        enum: ['cliente', 'usuario'],
        required: true
    },
    metodoPagoPreferido: {
        type: String,
        enum: ['tarjeta', 'paypal'], 
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
