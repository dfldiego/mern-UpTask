const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        //crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);

        // guardar el creado via JWT -> req.usuario: sacado de middleware/auth.js -> usuario.id: sacado de usuarioController.js del payload.
        proyecto.creador = req.usuario.id;

        // guardamos el proyecto en la BD
        proyecto.save();

        // si todo es correcto, devolvemos el proyecto creado.
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
/**
 * al enviar un token valido, se guarda la referencia del usuario correctamente y
 * extrae los valores que require del JWT y valida que sea valido el token
 * y lo va agregando como creador del proyecto.
 * Tenemos la creacion de los proyectos atada al usuario que está autenticado y solamente
 * ese usuario podrá verlo
 */