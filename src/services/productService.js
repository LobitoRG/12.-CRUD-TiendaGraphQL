const products = [];

module.exports = {
    
    getAllProducts: () => products,

    
    createProduct: ({ nombre, descripcion, precio, categoria, marca, cantidadEnInv = 0, imagenes = [] }) => {
        const newProduct = {
            _id: `${products.length + 1}`,  
            nombre,
            descripcion,
            precio,
            categoria,
            marca,
            cantidadEnInv,
            fechCreacion: new Date().toISOString(),  
            imagenes
        };
        products.push(newProduct);  
        return newProduct;
    },

    updateProduct: (_id, updateData) => {
        const productIndex = products.findIndex((p) => p._id === _id);
        if (productIndex === -1) throw new Error("Producto no encontrado");

        products[productIndex] = { ...products[productIndex], ...updateData };
        return products[productIndex];  
    },

    deleteProduct: (_id) => {
        const productIndex = products.findIndex((p) => p._id === _id);
        if (productIndex === -1) throw new Error("Producto no encontrado");

        return products.splice(productIndex, 1)[0];  
    }
};
