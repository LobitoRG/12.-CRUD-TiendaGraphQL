const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: {
        type: String,
        enum: ['frutas y verduras', 'lacteos', 'frituras','carnicos','bebidas','galletas'], 
        required: true
    },
    marca: { type: String, required: true },
    cantidadEnInv: { type: Number, default: 0 },
    fechCreacion: { type: Date, default: Date.now }, 
    imagenes: [String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
