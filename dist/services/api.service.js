import { LANGCODES } from './../constants/lang-codes.js';
import { URL_LOCALHOST, CURRENT } from './../constants/constants.js';
import axios from 'axios';
import { OPENWEATHER_API_KEY, DEFAULT_LANGUAGE, DEFAULT_UNITS } from '../config/env.js';
export class ApiService {
    APIKEY;
    lang;
    units;
    constructor(APIKEY, lang = DEFAULT_LANGUAGE, units = DEFAULT_UNITS) {
        // Usar API key proporcionada o la del entorno
        this.APIKEY = APIKEY || OPENWEATHER_API_KEY;
        this.configurarIdioma(lang);
        this.configurarUnidades(units);
    }
    /**
     * Configuramos el idioma
     * @param lang COdigo del idioma
     */
    configurarIdioma(lang) {
        if (LANGCODES.filter((l) => l.code === lang).length === 1) {
            this.lang = `&lang=${lang}`;
        }
        else {
            this.lang = `&lang=es`;
        }
    }
    /**
     * Obtenemos las unidades mediante la configuracion
     * @param unit Unidad si es metrico o no
     */
    configurarUnidades(unit) {
        this.units = '';
        if (unit === 'm' || unit === 'metric') {
            this.units = `&units=metric`;
        }
    }
    // https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&lang=es&units=metric&appid=' + APIKEY;
    /**
     * Obtener el tiempo actual buscando por nombre
     * @param nombre Nombre del lugar
     * @param codPais Código del pais: por ejemplo 'es' de Espñaa
     */
    buscarPorNombre(nombre, codPais = '') {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (codPais === '') {
            filtro = `q=${nombre}`;
        }
        else {
            filtro = `q=${nombre},${codPais}`;
        }
        // LLamada a la api
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;
        /*return axios.get(url).then(
            e => { return e.data }
        ).catch(
            error => {return error}
        );*/
        return this.requestApi(url);
    }
    /**
     * Obtener el tiempo mediante la localizacion
     * @param localizacion coordenadas del lugar que queremos usar
     */
    buscarPorLocalizacionGeografica(localizacion) {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (localizacion === undefined || localizacion === null) {
            filtro = `lat=-33.8473567&lon=150.6517943`;
            console.warn('Estás usando la localizacion de Sidney ya que no has puesto una correcta');
        }
        else {
            filtro = `lat=${localizacion.lat}&lon=${localizacion.lon}`;
        }
        // LLamada a la api
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;
        /*return axios.get(url).then(
            e => { return e.data }
        ).catch(
            error => {return error}
        );*/
        return this.requestApi(url);
    }
    /**
     * Obtenemos mediante el codigo postal del lugar
     * @param cp Código postal del lugar
     * @param codPais Código del pais del lugar
     */
    buscarPorZipCodigoPostal(cp, codPais = '') {
        let parametros = `${this.units}${this.lang}&appid=${this.APIKEY}`;
        let filtro = '';
        if (codPais === '') {
            filtro = `zip=${cp}`;
        }
        else {
            filtro = `zip=${cp},${codPais}`;
        }
        // LLamada a la api
        const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;
        /*return axios.get(url).then(
            e => { return e.data }
        ).catch(
            error => {return error}
        );*/
        return this.requestApi(url);
    }
    requestApi(url) {
        // LLamada a la api
        // const url = `${URL_LOCALHOST}${CURRENT}${filtro}${parametros}`;
        return axios.get(url).then((e) => { return e.data; }).catch((error) => { return error; });
    }
}
//# sourceMappingURL=api.service.js.map