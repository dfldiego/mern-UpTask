const express = require('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

// conectar a la BBDD
conectarDB();

// puerto de la app
const PORT = process.env.PORT || 4000;

// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});