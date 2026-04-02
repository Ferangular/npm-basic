const m = require('.');

console.log('=== PRUEBAS DE OPERACIONES BÁSICAS ===');

// Pruebas de suma
console.log('\n--- SUMA ---');
console.log('m.suma(1, 2):', m.suma(1, 2));  // 3
console.log('m.suma(0, 0):', m.suma(0, 0));  // 0
console.log('m.suma(-5, 10):', m.suma(-5, 10)); // 5
console.log('m.suma(3.5, 2.5):', m.suma(3.5, 2.5)); // 6

// Pruebas de resta
console.log('\n--- RESTA ---');
console.log('m.resta(11, 24):', m.resta(11, 24)); // -13
console.log('m.resta(1, 2):', m.resta(1, 2)); // -1
console.log('m.resta(10, 5):', m.resta(10, 5)); // 5
console.log('m.resta(0, 0):', m.resta(0, 0)); // 0

// Pruebas de multiplicación
console.log('\n--- MULTIPLICACIÓN ---');
console.log('m.multiplicacion(1, 24):', m.multiplicacion(1, 24)); // 24
console.log('m.multiplicacion(3, 4):', m.multiplicacion(3, 4)); // 12
console.log('m.multiplicacion(-2, 5):', m.multiplicacion(-2, 5)); // -10
console.log('m.multiplicacion(2.5, 4):', m.multiplicacion(2.5, 4)); // 10

// Pruebas de división
console.log('\n--- DIVISIÓN ---');
console.log('m.division(10, 2):', m.division(10, 2)); // 5
console.log('m.division(1, 3):', m.division(1, 3)); // 0.333...
console.log('m.division(-6, 2):', m.division(-6, 2)); // -3
console.log('m.division(7, 2):', m.division(7, 2)); // 3.5

console.log('\n=== PRUEBAS DE OPERACIONES AVANZADAS ===');

// Pruebas de potencia
console.log('\n--- POTENCIA ---');
console.log('m.potencia(2, 3):', m.potencia(2, 3)); // 8
console.log('m.potencia(5, 2):', m.potencia(5, 2)); // 25
console.log('m.potencia(3, 0):', m.potencia(3, 0)); // 1
console.log('m.potencia(-2, 3):', m.potencia(-2, 3)); // -8
console.log('m.potencia(4, 0.5):', m.potencia(4, 0.5)); // 2

// Pruebas de raíz cuadrada
console.log('\n--- RAÍZ CUADRADA ---');
console.log('m.raizCuadrada(9):', m.raizCuadrada(9)); // 3
console.log('m.raizCuadrada(16):', m.raizCuadrada(16)); // 4
console.log('m.raizCuadrada(0):', m.raizCuadrada(0)); // 0
console.log('m.raizCuadrada(2.25):', m.raizCuadrada(2.25)); // 1.5

console.log('\n=== PRUEBAS DE ERRORES ===');

// Pruebas de error con tipos incorrectos
console.log('\n--- ERRORES DE TIPO ---');
try {
    console.log('m.suma(true, 2):', m.suma(true, 2));
} catch (error) {
    console.log('Error en suma(true, 2):', error.message);
}

try {
    console.log('m.multiplicacion("eeee", "fhfjkdd"):', m.multiplicacion('eeee', 'fhfjkdd'));
} catch (error) {
    console.log('Error en multiplicacion("eeee", "fhfjkdd"):', error.message);
}

try {
    console.log('m.resta("hola", 5):', m.resta("hola", 5));
} catch (error) {
    console.log('Error en resta("hola", 5):', error.message);
}

try {
    console.log('m.division(null, 2):', m.division(null, 2));
} catch (error) {
    console.log('Error en division(null, 2):', error.message);
}

// Pruebas de error con NaN
try {
    console.log('m.suma(NaN, 5):', m.suma(NaN, 5));
} catch (error) {
    console.log('Error en suma(NaN, 5):', error.message);
}

// Pruebas de división por cero
console.log('\n--- DIVISIÓN POR CERO ---');
try {
    console.log('m.division(10, 0):', m.division(10, 0));
} catch (error) {
    console.log('Error en division(10, 0):', error.message);
}

// Pruebas de raíz cuadrada de número negativo
console.log('\n--- RAÍZ CUADRADA DE NEGATIVO ---');
try {
    console.log('m.raizCuadrada(-9):', m.raizCuadrada(-9));
} catch (error) {
    console.log('Error en raizCuadrada(-9):', error.message);
}

console.log('\n=== PRUEBAS DE FUNCIONES DE COMPATIBILIDAD ===');

// Pruebas de funciones antiguas (deprecadas)
console.log('\n--- FUNCIONES ANTIGUAS ---');
console.log('m.esNumero(5, 3):', m.esNumero(5, 3)); // true
console.log('m.esNumero("hola", 3):', m.esNumero("hola", 3)); // false
console.log('m.mensajeError():', m.mensajeError()); // undefined con mensaje en consola

console.log('\n=== PRUEBAS DE CASOS LÍMITE ===');

// Casos límite
console.log('\n--- CASOS LÍMITE ---');
console.log('m.suma(Infinity, 1):', m.suma(Infinity, 1));
console.log('m.resta(-Infinity, 5):', m.resta(-Infinity, 5));
console.log('m.multiplicacion(0, Infinity):', m.multiplicacion(0, Infinity));

console.log('\n=== FIN DE LAS PRUEBAS ===');
