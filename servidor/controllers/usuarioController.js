const Usuario = require('../models/Usuario');
const usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
    try {
        let usuario;

        // create
        usuario = new Usuario(req.body);
        // guardar
        await usuario.save();
        //mensaje de confirmacion
        res.send('Usuario creado correctamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}