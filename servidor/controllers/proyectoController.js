const Proyecto = require('../models/Proyecto');

exports.crearProyecto = async (req, res) => {

    try {
        //crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);

        // guardamos el proyecto en la BD
        proyecto.save();

        // si todo es correcto, devolvemos el proyecto creado.
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}