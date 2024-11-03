const { gql } = require('apollo-server');

const userSchema = gql`
    enum TipoUsuario {
        cliente
        usuario
    }

    enum MetodoPago {
        tarjeta
        paypal
    }

     type User {
        id: String!
        nombreCompleto: String!
        email: String!
        password: String!
        direccion: String
        telefono: String
        fechaRegistro: String!
        tipoUsuario: TipoUsuario!
        metodoPagoPreferido: MetodoPago
    }

    type Query {
        users: [User]          # Para obtener todos los usuarios
        getUser(id: String!): User  # Para obtener un usuario específico
    }

    type Mutation {
        createUser(
            nombreCompleto: String!
            email: String!
            password: String!
            direccion: String
            telefono: String
            tipoUsuario: TipoUsuario!
            metodoPagoPreferido: MetodoPago
        ): User
        updateUser(
            id: String!
            nombreCompleto: String
            email: String
            password: String
            direccion: String
            telefono: String
            tipoUsuario: TipoUsuario
            metodoPagoPreferido: MetodoPago
        ): User
        deleteUser(id: String!): String
    }
`;

module.exports = userSchema;