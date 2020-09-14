import clienteAxios from './axios';

const tokenAuth = token => {
    if (token) {
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        // vamos a eliminar x-auth-token del header xq usuario: cerro sesion o expiró el token.
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;