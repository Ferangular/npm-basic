const saludos = require('./index.js');

console.log('=== Demo de la librería de saludos ===\n');

// Probar todas las funciones existentes
console.log('1. Saludo básico:');
saludos.hola();

console.log('\n2. Saludo personalizado:');
saludos.holaPersonalizado('Fer');

console.log('\n3. Saludo al curso NPM:');
saludos.holaAlCursoNPM();

console.log('\n=== Información adicional ===');
console.log('Esta librería es perfecta para aprender:');
console.log('✅ Crear paquetes npm');
console.log('✅ Estructura de módulos');
console.log('✅ Exportación de funciones');
console.log('✅ Documentación con JSDoc');
console.log('✅ Testing básico');

console.log('\n=== Próximas mejoras ===');
console.log('- Saludos en múltiples idiomas');
console.log('- Saludos según hora del día');
console.log('- Saludos animados');
console.log('- Validación de parámetros');
console.log('- Manejo de errores');
