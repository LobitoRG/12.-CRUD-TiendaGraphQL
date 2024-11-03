const users = []; // Arreglo en memoria para almacenar los usuarios

const usersResolver = {
    Query: {
        users: () => users, // Resuelve la consulta para obtener todos los usuarios
        getUser: (_, { id }) => users.find(user => user.id === id), // Resuelve la consulta para obtener un usuario por ID
    },
    Mutation: {
        createUser: (_, { nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido }) => {
            const newUser = {
                id: `${users.length + 1}`, // Genera un ID simple
                nombreCompleto,
                email,
                password,
                direccion,
                telefono,
                fechaRegistro: new Date().toISOString(), // Fecha actual
                tipoUsuario,
                metodoPagoPreferido,
            };
            users.push(newUser); // Agrega el nuevo usuario al arreglo
            return newUser; // Devuelve el usuario creado
        },
        updateUser: (_, { id, ...updates }) => {
            const index = users.findIndex(user => user.id === id); // Busca el índice del usuario
            if (index === -1) return null; // Si no se encuentra, devuelve null
            const updatedUser = { ...users[index], ...updates }; // Actualiza los datos del usuario
            users[index] = updatedUser; // Reemplaza el usuario en el arreglo
            return updatedUser; // Devuelve el usuario actualizado
        },
        deleteUser: (_, { id }) => {
            const index = users.findIndex(user => user.id === id); // Busca el índice del usuario
            if (index === -1) return null; // Si no se encuentra, devuelve null
            users.splice(index, 1); // Elimina el usuario del arreglo
            return `Usuario con ID ${id} eliminado`; // Mensaje de confirmación
        }
    }
};

module.exports = usersResolver;
