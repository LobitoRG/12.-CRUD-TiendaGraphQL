const users = []; // Arreglo para almacenar los usuarios

const createUser = (nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodoPagoPreferido) => {
    const newUser = {
        id: `${users.length + 1}`,
        nombreCompleto,
        email,
        password,
        direccion,
        telefono,
        fechaRegistro: new Date().toISOString(), // Asegúrate de que se convierte a string
        tipoUsuario,
        metodoPagoPreferido
    };
    users.push(newUser);
    return newUser; // Retorna el usuario creado
};

const getAllUsers = () => users;

const getUser = (id) => users.find(user => user.id === id);

const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    return users.splice(index, 1)[0]; // Elimina y retorna el usuario eliminado
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

    return user; // Retorna el usuario actualizado
};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser
};
