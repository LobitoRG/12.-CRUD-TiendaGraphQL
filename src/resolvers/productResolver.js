const productService = require('../services/productService');

const resolvers = {
    Query: {
        products: () => productService.getAllProducts(),
    },
    Mutation: {
        createProduct: (_, args) => productService.createProduct(args),
        updateProduct: (_, args) => productService.updateProduct(args._id, args),
        deleteProduct: (_, { _id }) => productService.deleteProduct(_id),  // Verifica que esta línea esté presente
    }
};

module.exports = resolvers;
