const { gql } = require('apollo-server');

const typeDefs = gql`
    type Product {
        _id: ID!
        nombre: String!
        descripcion: String
        precio: Float!
        categoria: String!
        marca: String
        cantidadEnInv: Int
        fechCreacion: String
        imagenes: [String]
    }

    type Query {
        products: [Product]
    }

    type Mutation {
        createProduct(
            nombre: String!,
            descripcion: String,
            precio: Float!,
            categoria: String!,
            marca: String,
            cantidadEnInv: Int,
            imagenes: [String]
        ): Product!

        updateProduct(
            _id: ID!,
            nombre: String,
            descripcion: String,
            precio: Float,
            categoria: String,
            marca: String,
            cantidadEnInv: Int,
            imagenes: [String]
        ): Product!

        deleteProduct(_id: ID!): Product!  # Asegúrate de que esto esté presente
    }
`;

module.exports = typeDefs;
