const users = []; 

const usersResolver = {
    Query: {
        users: () => users, 
        getUser: (_, { id }) => users.find(user => user.id === id), 
    },
    Mutation: {
        createUser: (_, { nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido }) => {
            const newUser = {
                id: `${users.length + 1}`, 
                nombreCompleto,
                email,
                password,
                direccion,
                telefono,
                fechaRegistro: new Date().toISOString(), 
                tipoUsuario,
                metodoPagoPreferido,
            };
            users.push(newUser); 
            return newUser; 
        },
        updateUser: (_, { id, ...updates }) => {
            const index = users.findIndex(user => user.id === id); 
            if (index === -1) return null; 
            const updatedUser = { ...users[index], ...updates }; 
            users[index] = updatedUser; 
            return updatedUser; 
        },
        deleteUser: (_, { id }) => {
            const index = users.findIndex(user => user.id === id); 
            if (index === -1) return null; 
            users.splice(index, 1); 
            return `Usuario con ID ${id} eliminado`; 
        }
    }
};

module.exports = usersResolver;
