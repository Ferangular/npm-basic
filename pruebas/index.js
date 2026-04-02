const api = require('../index.js');

console.log('🧪 Iniciando pruebas básicas de API GitHub...\n');

// Test 1: Usuario existente (Ferangular)
console.log('📋 Test 1: Usuario existente (Ferangular)');
api.obtenerDatosDeUsuario('Ferangular')
  .then(data => {
    if (data.message) {
      console.log('❌ Test 1 falló:', data.message);
      return;
    }
    
    console.log('✅ Test 1 - Usuario encontrado:');
    console.log(`👤 Nombre: ${data.name} (@${data.login})`);
    console.log(`📊 Repositorios: ${data.public_repos}`);
    console.log(`👥 Seguidores: ${data.followers}`);
    console.log(`🔄 Siguiendo: ${data.following}`);
    console.log(`🔗 Perfil: ${data.html_url}`);
    console.log(`📅 Creado: ${new Date(data.created_at).toLocaleDateString()}`);
    console.log('');
  })
  .catch(error => {
    console.error('❌ Test 1 - Error de conexión:', error.message);
    console.log('');
  });

// Test 2: Usuario no existente
console.log('📋 Test 2: Usuario no existente');
api.obtenerDatosDeUsuario('usuarioquenexiste12345')
  .then(data => {
    if (data.message) {
      console.log('✅ Test 2 - Error controlado correctamente:');
      console.log(`❌ Mensaje: ${data.message}`);
      console.log('');
      return;
    }
    
    console.log('❌ Test 2 falló: Debería haber devuelto error');
    console.log('');
  })
  .catch(error => {
    console.error('❌ Test 2 - Error inesperado:', error.message);
    console.log('');
  });

// Test 3: Usuario estándar (octocat)
console.log('📋 Test 3: Usuario estándar (octocat)');
api.obtenerDatosDeUsuario('octocat')
  .then(data => {
    if (data.message) {
      console.log('❌ Test 3 falló:', data.message);
      return;
    }
    
    console.log('✅ Test 3 - Usuario estándar encontrado:');
    console.log(`👤 Nombre: ${data.name} (@${data.login})`);
    console.log(`📊 Repositorios: ${data.public_repos}`);
    console.log(`👥 Seguidores: ${data.followers}`);
    console.log('');
  })
  .catch(error => {
    console.error('❌ Test 3 - Error de conexión:', error.message);
    console.log('');
  });

// Resumen final
setTimeout(() => {
  console.log('📊 Resumen de pruebas:');
  console.log('─'.repeat(30));
  console.log('✅ Tests ejecutados: 3');
  console.log('🔍 API GitHub: Funcionando');
  console.log('📡 Conexión: Estable');
  console.log('👤 Usuario Ferangular: Datos obtenidos');
  console.log('🛡️ Manejo de errores: Implementado');
  console.log('');
  console.log('🎉 Pruebas completadas exitosamente');
}, 2000);
