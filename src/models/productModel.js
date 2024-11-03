const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: {
        type: String,
        enum: ['frutas y verduras', 'lacteos', 'frituras','carnicos','bebidas','galletas'], // Puedes agregar más categorías
        required: true
    },
    marca: { type: String, required: true },
    cantidadEnInv: { type: Number, default: 0 },
    fechCreacion: { type: Date, default: Date.now }, // Fecha actual generada por el sistema
    imagenes: [String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
