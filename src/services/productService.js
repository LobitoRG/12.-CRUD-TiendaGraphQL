// Arreglo en memoria para almacenar productos
const products = [];

// Funciones para manejar operaciones CRUD
module.exports = {
    // Obtener todos los productos
    getAllProducts: () => products,

    // Crear un nuevo producto
    createProduct: ({ nombre, descripcion, precio, categoria, marca, cantidadEnInv = 0, imagenes = [] }) => {
        const newProduct = {
            _id: `${products.length + 1}`,  // Generación de ID simple basado en la longitud del arreglo
            nombre,
            descripcion,
            precio,
            categoria,
            marca,
            cantidadEnInv,
            fechCreacion: new Date().toISOString(),  // Fecha actual
            imagenes
        };
        products.push(newProduct);  // Añade el producto al arreglo
        return newProduct;
    },

    // Actualizar un producto
    updateProduct: (_id, updateData) => {
        const productIndex = products.findIndex((p) => p._id === _id);
        if (productIndex === -1) throw new Error("Producto no encontrado");

        // Solo actualiza los campos que se pasan en updateData
        products[productIndex] = { ...products[productIndex], ...updateData };
        return products[productIndex];  // Devuelve el producto actualizado
    },

    // Eliminar un producto
    deleteProduct: (_id) => {
        const productIndex = products.findIndex((p) => p._id === _id);
        if (productIndex === -1) throw new Error("Producto no encontrado");

        return products.splice(productIndex, 1)[0];  // Elimina y devuelve el producto
    }
};
