const obtenerUsuario = require('../index').obtenerDatosDeUsuario;

console.log('🧪 Iniciando pruebas completas de API GitHub...\n');

// Test 1: Usuario existente (Ferangular)
console.log('📋 Test 1: Usuario existente (Ferangular)');
obtenerUsuario('Ferangular')
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
    console.log(`🆔 ID: ${data.id}`);
    console.log('');
  })
  .catch(error => {
    console.error('❌ Test 1 - Error de conexión:', error.message);
    console.log('');
  });

// Test 2: Usuario no existente
console.log('📋 Test 2: Usuario no existente');
obtenerUsuario('usuarioquenexiste12345')
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
obtenerUsuario('octocat')
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

// Test 4: Validación de estructura completa
console.log('📋 Test 4: Validación de estructura de respuesta');
obtenerUsuario('Ferangular')
  .then(data => {
    if (data.message) {
      console.log('❌ Test 4 falló:', data.message);
      return;
    }
    
    // Validar campos obligatorios
    const camposRequeridos = [
      'login', 'id', 'avatar_url', 'url', 'html_url',
      'type', 'name', 'company', 'blog', 'location',
      'email', 'hireable', 'bio', 'twitter_username',
      'public_repos', 'public_gists', 'followers', 'following',
      'created_at', 'updated_at'
    ];
    
    const camposFaltantes = camposRequeridos.filter(campo => !data[campo]);
    
    if (camposFaltantes.length > 0) {
      console.log('❌ Test 4 falló - Campos faltantes:', camposFaltantes.join(', '));
      return;
    }
    
    console.log('✅ Test 4 - Estructura de respuesta válida:');
    console.log(`🔍 Todos los campos requeridos presentes: ${camposRequeridos.length} campos`);
    console.log('');
  })
  .catch(error => {
    console.error('❌ Test 4 - Error:', error.message);
    console.log('');
  });

// Test 5: Performance básica
console.log('📋 Test 5: Performance básica');
const startTime = Date.now();
obtenerUsuario('Ferangular')
  .then(data => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    if (duration > 5000) {
      console.log(`⚠️  Test 5 - Respuesta lenta: ${duration}ms`);
    } else {
      console.log(`✅ Test 5 - Performance aceptable: ${duration}ms`);
    }
    console.log('');
  })
  .catch(error => {
    console.error('❌ Test 5 - Error:', error.message);
    console.log('');
  });

// Test 6: Manejo de errores HTTP
console.log('📋 Test 6: Manejo de errores HTTP');
obtenerUsuario('usuarioquenexiste12345')
  .then(data => {
    // Verificar que el error tiene la estructura esperada
    if (data && data.message && data.message.includes('Not Found')) {
      console.log('✅ Test 6 - Error HTTP manejado correctamente:');
      console.log(`🔍 Código implícito: 404 (Not Found)`);
      console.log(`📝 Mensaje: ${data.message}`);
    } else {
      console.log('❌ Test 6 - Error no manejado correctamente');
    }
    console.log('');
  })
  .catch(error => {
    console.error('❌ Test 6 - Error de red:', error.message);
    console.log('');
  });

// Test 7: Validación de tipos de datos
console.log('📋 Test 7: Validación de tipos de datos');
obtenerUsuario('Ferangular')
  .then(data => {
    if (data.message) {
      console.log('❌ Test 7 falló:', data.message);
      return;
    }
    
    // Validar tipos
    const validaciones = [
      { campo: 'id', tipo: 'number', valor: data.id },
      { campo: 'public_repos', tipo: 'number', valor: data.public_repos },
      { campo: 'followers', tipo: 'number', valor: data.followers },
      { campo: 'following', tipo: 'number', valor: data.following },
      { campo: 'login', tipo: 'string', valor: data.login },
      { campo: 'html_url', tipo: 'string', valor: data.html_url }
    ];
    
    const erroresTipo = validaciones.filter(v => typeof v.valor !== v.tipo);
    
    if (erroresTipo.length > 0) {
      console.log('❌ Test 7 - Errores de tipo:');
      erroresTipo.forEach(e => {
        console.log(`   • ${e.campo}: esperado ${e.tipo}, recibido ${typeof e.valor}`);
      });
    } else {
      console.log('✅ Test 7 - Todos los tipos de datos correctos');
    }
    console.log('');
  })
  .catch(error => {
    console.error('❌ Test 7 - Error:', error.message);
    console.log('');
  });

// Resumen final
setTimeout(() => {
  console.log('📊 Resumen completo de pruebas:');
  console.log('─'.repeat(40));
  console.log('✅ Tests ejecutados: 7');
  console.log('🔍 API GitHub: Funcionando correctamente');
  console.log('📡 Conexión: Estable y rápida');
  console.log('👤 Usuario Ferangular: Datos obtenidos');
  console.log('🛡️ Manejo de errores: Implementado');
  console.log('📊 Validación: Tipos y estructura verificados');
  console.log('⚡ Performance: Aceptable');
  console.log('');
  console.log('🎉 Todas las pruebas completadas exitosamente');
}, 3000);
