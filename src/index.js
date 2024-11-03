const { ApolloServer } = require('apollo-server');
const userSchema = require('./schemas/userSchema');
const userResolver = require('./resolvers/userResolver');
const productSchema = require('./schemas/productSchema'); 
const productResolver = require('./resolvers/productResolver');

const server = new ApolloServer({
    typeDefs: [userSchema, productSchema],
    resolvers: [userResolver, productResolver], 
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
