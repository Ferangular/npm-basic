module.exports = {
    /**
     * Suma de dos numeros
     * @example
     * n1 = 1 , n2 = 3 => resultado 4
     * @param {number} n1 Numero uno de la suma
     * @param {number} n2 Numero dos de la suma
     * @returns {number} Resultado de la suma
     * @throws {TypeError} Cuando los parámetros no son números
     */
    suma: function (n1, n2) {
        this.validarNumeros(n1, n2);
        return n1 + n2;
    },
    
    /**
     * Resta de dos numeros
     * @example
     * n1 = 1 , n2 = 3 => resultado -2
     * @param {number} n1 Numero uno de la resta
     * @param {number} n2 Numero dos de la resta
     * @returns {number} Resultado de la resta
     * @throws {TypeError} Cuando los parámetros no son números
     */
    resta: function (n1, n2) {
        this.validarNumeros(n1, n2);
        return n1 - n2;
    },
    
    /**
     * Multiplicacion de dos numeros
     * @example
     * n1 = 1 , n2 = 3 => resultado 3
     * @param {number} n1 Numero uno de la multiplicacion
     * @param {number} n2 Numero dos de la multiplicacion
     * @returns {number} Resultado de la multiplicación
     * @throws {TypeError} Cuando los parámetros no son números
     */
    multiplicacion: function (n1, n2) {
        this.validarNumeros(n1, n2);
        return n1 * n2;
    },
    
    /**
     * Division de dos numeros
     * @example
     * n1 = 1 , n2 = 3 => resultado 0.33
     * @param {number} n1 Numero uno de la Division
     * @param {number} n2 Numero dos de la Division
     * @returns {number} Resultado de la división
     * @throws {TypeError} Cuando los parámetros no son números
     * @throws {Error} Cuando se intenta dividir por cero
     */
    division: function (n1, n2) {
        this.validarNumeros(n1, n2);
        if (n2 === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return n1 / n2;
    },
    
    /**
     * Potencia de un número
     * @example
     * base = 2 , exponente = 3 => resultado 8
     * @param {number} base Base de la potencia
     * @param {number} exponente Exponente de la potencia
     * @returns {number} Resultado de la potencia
     * @throws {TypeError} Cuando los parámetros no son números
     */
    potencia: function (base, exponente) {
        this.validarNumeros(base, exponente);
        return Math.pow(base, exponente);
    },
    
    /**
     * Raíz cuadrada de un número
     * @example
     * n = 9 => resultado 3
     * @param {number} n Número para calcular la raíz cuadrada
     * @returns {number} Raíz cuadrada del número
     * @throws {TypeError} Cuando el parámetro no es un número
     * @throws {Error} Cuando el número es negativo
     */
    raizCuadrada: function (n) {
        if (typeof n !== 'number') {
            throw new TypeError('El parámetro debe ser un número');
        }
        if (n < 0) {
            throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
        }
        return Math.sqrt(n);
    },
    
    /**
     * Valida que ambos parámetros sean números
     * @param {number} n1 Primer número a validar
     * @param {number} n2 Segundo número a validar
     * @throws {TypeError} Cuando alguno de los parámetros no es un número
     */
    validarNumeros: function (n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            throw new TypeError('Ambos parámetros deben ser números. Recibido: ' + typeof n1 + ', ' + typeof n2);
        }
        if (isNaN(n1) || isNaN(n2)) {
            throw new TypeError('Ambos parámetros deben ser números válidos (no NaN)');
        }
    },
    
    /**
     * Comprueba que son valores numéricos (función de compatibilidad)
     * @param {*} n1
     * @param {*} n2
     * @deprecated Usar validarNumeros en su lugar
     */
    esNumero: function (n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            return false;
        }
        return true;
    },
    
    /**
     * Mensaje de error que se ejecuta cuando no tengamos valores numéricos
     * @deprecated Usar validarNumeros que lanza excepciones
     */
    mensajeError: function() {
        console.log('Un valor o los dos valores no son numéricos');
        return undefined;
    }
}
