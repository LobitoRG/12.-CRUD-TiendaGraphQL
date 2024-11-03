const users = []; // Arreglo para almacenar los usuarios

const createUser = (nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido) => {
    const newUser = {
        id: `${users.length + 1}`,
        nombreCompleto,
        email,
        password,
        direccion,
        telefono,
        fechaRegistro: new Date().toISOString(),
        tipoUsuario,
        metodoPagoPreferido
    };
    users.push(newUser);
    return newUser;
};

const getAllUsers = () => users;

const getUser = (id) => users.find(user => user.id === id);

const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    return users.splice(index, 1)[0]; 
};

const updateUser = (id, nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido) => {
    const user = getUser(id);
    if (!user) return null;

    user.nombreCompleto = nombreCompleto;
    user.email = email;
    user.password = password;
    user.direccion = direccion;
    user.telefono = telefono;
    user.tipoUsuario = tipoUsuario;
    user.metodoPagoPreferido = metodoPagoPreferido;

    return user; 
};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser
};
