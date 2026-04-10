import matematica from 'proyecto-1-matematicas';
/**
 * Comprobar numeros pares o no
 * @param numero Numero que vamos a comprobar si es par
 */
export function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    return false;
}
/**
 * Haciendo uso de la libreria vieja adaptada a TS
 * @param tipo Tipo de operacion que puede ser suma, resta, multiplicacion o division
 * @param n1 Primer numero
 * @param n2 Segundo numero
 */
export function operacion(tipo, n1, n2) {
    switch (tipo) {
        case '+': {
            return matematica.suma(n1, n2);
        }
        case '-': {
            return matematica.resta(n1, n2);
        }
        case '*': {
            return matematica.multiplicacion(n1, n2);
        }
        case '/': {
            return matematica.division(n1, n2);
        }
        default: {
            console.warn('Tipo incorrecto');
            return;
        }
    }
}
//# sourceMappingURL=index.js.map