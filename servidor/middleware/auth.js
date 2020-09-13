const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // leer el token del header.
    const token = req.header('x-auth-token');
    /* console.log(token); */

    // revisar si no hay token
    if (!token) {
        return res.status(401).json({ msg: 'No hay Token, permiso no válido' })
    }

    // validar el token
    try {
        // token verificado 
        const cifrado = jwt.verify(token, process.env.SECRETA);

        // si se verifica bien -> en payload cuando creamos un usuario se le pasó un usuario.
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token no válido' });
    }
}