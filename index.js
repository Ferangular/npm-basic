const axios = require('axios');

module.exports = {
    /**
     * Introducir el usuario de github para obtener sus datos de la API
     * @example
     * usuario = 'Ferangular'
     * @param { string } usuario Usuario del que queremos los datos de la API
     */
    // https://github.com/Ferangular/npm-basic
    obtenerDatosDeUsuario: function ( usuario ) {
        const url = `https://api.github.com/users/${ usuario }`;
        return axios.get(url).then(
            data => data.data
        ).
        catch( error => error.response.data);
    }
}