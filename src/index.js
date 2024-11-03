const { ApolloServer } = require('apollo-server');
const userSchema = require('./schemas/userSchema');
const userResolver = require('./resolvers/userResolver');
const productSchema = require('./schemas/productSchema'); // Asumiendo que tienes un archivo para productos
const productResolver = require('./resolvers/productResolver');

const server = new ApolloServer({
    typeDefs: [userSchema, productSchema], // Aquí se añaden los esquemas
    resolvers: [userResolver, productResolver], // Aquí se añaden los resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
