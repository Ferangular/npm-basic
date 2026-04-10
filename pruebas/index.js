import { esPar, operacion } from '../dist/index.js';

console.log('=== Probando función esPar ===');
console.log('¿Es 8 par?', esPar(8)); // true
console.log('¿Es 7 par?', esPar(7)); // false
console.log('¿Es 0 par?', esPar(0)); // true

console.log('\n=== Probando función operacion ===');
console.log('5 + 3 =', operacion('+', 5, 3)); // 8
console.log('10 - 4 =', operacion('-', 10, 4)); // 6
console.log('3 * 7 =', operacion('*', 3, 7)); // 21
console.log('15 / 3 =', operacion('/', 15, 3)); // 5
console.log('Operación inválida:', operacion('x', 5, 3)); // undefined
