const Usuario = require('../models/Usuario');
const usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {

    // extraer email y password
    const { email, password } = req.body;

    try {
        //Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // create
        usuario = new Usuario(req.body);
        // guardar
        await usuario.save();
        //mensaje de confirmacion
        res.json({ msg: 'El usuario creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}