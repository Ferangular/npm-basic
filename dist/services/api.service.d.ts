import type { Coord } from "../interfaces/api.interface.js";
export declare class ApiService {
    private APIKEY;
    private lang;
    private units;
    constructor(APIKEY?: string, lang?: string, units?: string);
    /**
     * Configuramos el idioma
     * @param lang COdigo del idioma
     */
    private configurarIdioma;
    /**
     * Obtenemos las unidades mediante la configuracion
     * @param unit Unidad si es metrico o no
     */
    private configurarUnidades;
    /**
     * Obtener el tiempo actual buscando por nombre
     * @param nombre Nombre del lugar
     * @param codPais Código del pais: por ejemplo 'es' de Espñaa
     */
    buscarPorNombre(nombre: string, codPais?: string): Promise<any>;
    /**
     * Obtener el tiempo mediante la localizacion
     * @param localizacion coordenadas del lugar que queremos usar
     */
    buscarPorLocalizacionGeografica(localizacion: Coord): Promise<any>;
    /**
     * Obtenemos mediante el codigo postal del lugar
     * @param cp Código postal del lugar
     * @param codPais Código del pais del lugar
     */
    buscarPorZipCodigoPostal(cp: string, codPais?: string): Promise<any>;
    private requestApi;
}
//# sourceMappingURL=api.service.d.ts.map