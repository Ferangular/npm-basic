# API GitHub - Cliente para la API de GitHub

## Descripción
Módulo Node.js para obtener datos de usuarios desde la API de GitHub de forma sencilla y rápida. Ideal para aprender a consumir APIs REST y manejar peticiones HTTP asíncronas.

## 🚀 Características
- ✅ Obtención de datos de usuario de GitHub
- ✅ Manejo automático de errores
- ✅ Respuestas estructuradas
- ✅ Soporte para autenticación futura
- ✅ Licencia MIT (código abierto)

## 📦 Publicación en NPM

### Publicar el Paquete
```bash
# Publicar en NPM
npm publish

# Publicar con tag específico
npm publish --tag beta
```

### Despublicar el Paquete
```bash
# Despublicar paquete (solo si fue publicado hace menos de 72 horas)
npm unpublish practica_api_github_ferangular --force

# Despublicar versión específica
npm unpublish practica_api_github_ferangular@1.0.0 --force

# Verificar estado del paquete
npm view practica_api_github_ferangular
```

### ⚠️ Advertencia Importante
- **Solo puedes despublicar** si han pasado menos de 72 horas desde la publicación
- **No puedes republicar** con el mismo nombre si ya fue despublicado
- **Usa `--force`** con precaución, esta acción es irreversible

### Verificación de Publicación
```bash
# Verificar si el paquete existe
npm view practica_api_github_ferangular

# Verificar versiones publicadas
npm view practica_api_github_ferangular versions

# Buscar el paquete en NPM
npm search practica_api_github_ferangular
```

## 📦 Instalación y Configuración

### Requisitos Previos
- Node.js v14 o superior
- npm o yarn
- Acceso a internet para conexión con GitHub API

### Instalación del Módulo
```bash
# Instalar dependencias requeridas
npm install axios@1.13.5

# Verificar instalación
npm list axios
```

### Configuración del Proyecto
```bash
# Clonar el repositorio
git clone https://github.com/Ferangular/npm-basic.git
cd npm-basic

# Instalar todas las dependencias
npm install

# Verificar instalación completa
npm list --depth=0
```

### Verificación de Seguridad
```bash
# Audit de vulnerabilidades
npm audit

# Salida esperada:
# found 0 vulnerabilities

# Actualizar si hay problemas
npm audit fix --force
```

### Versiones Compatibles
- ✅ **axios@1.13.5**: Versión recomendada y segura
- ⚠️ **axios@<1.6.0**: Vulnerabilidades críticas conocidas
- ❌ **axios@<1.0.0**: Incompatible con el proyecto

## 📖 Uso Práctico

### Ejemplo Básico - Obtener Perfil
```javascript
const api = require('./index.js');

// Obtener información de cualquier usuario de GitHub
api.obtenerDatosDeUsuario('Ferangular')
  .then(data => {
    if (data.message) {
      console.log('❌ Usuario no encontrado');
      return;
    }
    
    console.log('👤 Perfil de GitHub:');
    console.log(`• Nombre: ${data.name || 'No especificado'}`);
    console.log(`• Usuario: @${data.login}`);
    console.log(`• Repositorios: ${data.public_repos}`);
    console.log(`• Seguidores: ${data.followers}`);
    console.log(`• Perfil: ${data.html_url}`);
  })
  .catch(error => {
    console.error('❌ Error de conexión:', error.message);
  });
```

### Ejemplo Avanzado - Análisis de Perfil
```javascript
const api = require('./index.js');

async function analizarPerfilGitHub(username) {
  try {
    console.log(`🔍 Analizando perfil de @${username}...`);
    
    const perfil = await api.obtenerDatosDeUsuario(username);
    
    if (perfil.message) {
      console.log(`❌ Error: ${perfil.message}`);
      return;
    }
    
    // Análisis detallado del perfil
    const analisis = {
      actividad: perfil.public_repos > 20 ? '🔥 Muy activo' : 
                 perfil.public_repos > 5 ? '📊 Activo' : '🌱 Principiante',
      popularidad: perfil.followers > 1000 ? '⭐ Popular' :
                   perfil.followers > 100 ? '👥 Reconocido' : '👤 En desarrollo',
      antiguedad: Math.floor((Date.now() - new Date(perfil.created_at)) / (1000 * 60 * 60 * 24 * 365))
    };
    
    console.log('\n📊 Análisis del Perfil:');
    console.log('─'.repeat(30));
    console.log(`👤 ${perfil.name || perfil.login}`);
    console.log(`📝 Bio: ${perfil.bio || 'Sin biografía'}`);
    console.log(`📍 Ubicación: ${perfil.location || 'No especificada'}`);
    console.log(`🏢 Empresa: ${perfil.company || 'Independiente'}`);
    console.log(`🔗 GitHub: ${perfil.html_url}`);
    console.log(`📊 Actividad: ${analisis.actividad} (${perfil.public_repos} repos)`);
    console.log(`👥 Popularidad: ${analisis.popularidad} (${perfil.followers} seguidores)`);
    console.log(`📅 Antigüedad: ${analisis.antiguedad} años en GitHub`);
    
    if (perfil.blog) {
      console.log(`🌐 Blog/Sitio web: ${perfil.blog}`);
    }
    
  } catch (error) {
    console.error('❌ Error al analizar perfil:', error.message);
  }
}

// Ejecutar análisis
analizarPerfilGitHub('Ferangular');
```

### Ejemplo con Manejo de Errores
```javascript
const api = require('./index.js');

async function buscarUsuarios(usernames) {
  console.log('🔍 Buscando múltiples usuarios...\n');
  
  for (const username of usernames) {
    try {
      const data = await api.obtenerDatosDeUsuario(username);
      
      if (data.message) {
        console.log(`❌ @${username}: ${data.message}`);
        continue;
      }
      
      console.log(`✅ @${data.login}: ${data.name || 'Sin nombre'} - ${data.public_repos} repos`);
      
    } catch (error) {
      console.log(`🔴 @${username}: Error de conexión - ${error.message}`);
    }
  }
}

// Lista de usuarios a buscar
const usuarios = ['Ferangular', 'octocat', 'usuarioquenexiste12345'];
buscarUsuarios(usuarios);
```

## 🔍 Seguridad y Dependencias

### Auditoría de Seguridad
```bash
# Verificar vulnerabilidades
npm audit

# Salida esperada:
# found 0 vulnerabilities

# Actualizar si hay problemas
npm audit fix --force
```

### Versiones Seguras
- ✅ **axios@1.13.5**: Versión recomendada y segura
- ⚠️ **axios@<1.6.0**: Vulnerabilidades críticas conocidas
- ❌ **axios@<1.0.0**: Incompatible con el proyecto

### Vulnerabilidades Conocidas
> **CVE-2023-45857**: SSRF en axios <1.6.0  
> **CVE-2023-4217**: Prototype pollution en axios <1.5.0  
> **Solución**: Usar siempre `axios@1.13.5` o superior

### Verificación de Integridad
```bash
# Verificar scripts peligrosos en dependencias
Get-Content .\node_modules\axios\package.json | Select-String "preinstall|install|postinstall"

# Verificar hashes de integridad
npm audit --audit-level moderate

# Listar dependencias con versiones
npm ls --depth=0
```

## 🧪 Pruebas y Testing

### Scripts de Pruebas Disponibles
```bash
npm test              # Tests básicos (pruebas/index.js)
npm run test:unit    # Tests unitarios con Mocha (test/index_mocha.js)
npm run test:simple  # Tests simples sin frameworks (test/index.js)
npm run test:watch  # Modo vigilancia
```

### Pruebas Funcionales
- **✅ API GitHub**: Conexión estable y funcionando
- **✅ Usuario Ferangular**: Datos obtenidos correctamente
- **✅ Manejo de errores**: HTTP 404 y errores de conexión
- **✅ Validación**: Estructura y tipos de datos
- **✅ Performance**: Tiempos de respuesta aceptables

### Ejecutar Pruebas
```bash
# Pruebas básicas rápidas
npm test

# Pruebas unitarias completas con Mocha
npm run test:unit

# Pruebas simples sin dependencias
npm run test:simple
```

## 📚 Documentación Técnica

### Estructura del Proyecto
```
api_github/
├── index.js              # Módulo principal ✅
├── package.json          # Configuración y scripts ✅
├── README.md             # Documentación completa ✅
├── LICENSE              # Licencia MIT ✅
├── .gitignore           # Archivos ignorados por Git ✅
├── .npmignore           # Archivos ignorados por NPM ✅
├── pruebas/
│   └── index.js        # Tests básicos funcionando ✅
└── test/
    ├── index.js          # Tests simples sin frameworks ✅
    ├── index_mocha.js    # Tests con Mocha/Chai ✅
    └── respuestas/
        ├── Ferangular.js  # Mock datos Ferangular ✅
        └── mugan86.js    # Mock datos mugan86 ✅
```

### Configuración del Paquete
```json
{
  "name": "api_github",
  "version": "1.0.0",
  "description": "Acceso a la API de GitHub",
  "main": "index.js",
  "scripts": {
    "test": "node pruebas/index.js",
    "test:unit": "mocha test/index_mocha.js",
    "test:simple": "node test/index.js",
    "test:watch": "node --watch test/index.js"
  },
  "dependencies": {
    "axios": "^1.13.5"
  },
  "devDependencies": {
    "chai": "^6.2.2",
    "mocha": "^11.7.5",
    "nock": "^14.0.11"
  }
}
```

## 🚀 Mejoras Futuras

### Planeado para v2.0.0
- [ ] Autenticación con token personal de GitHub
- [ ] Obtener repositorios del usuario
- [ ] Búsqueda avanzada de usuarios
- [ ] Paginación de resultados
- [ ] Caché inteligente de respuestas
- [ ] TypeScript definitions
- [ ] Tests unitarios con cobertura completa
- [ ] Integración con CI/CD

### Sugerencias de Contribución
```bash
# Para contribuir al proyecto
git clone https://github.com/Ferangular/npm-basic.git
cd npm-basic
npm install
# Realizar cambios
git commit -m "feat: nueva funcionalidad"
git push origin main
```

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License**. 

### Resumen de la licencia
- ✅ Uso comercial permitido
- ✅ Modificación permitida
- ✅ Distribución permitida
- ✅ Uso privado permitido
- ❌ Responsabilidad no garantizada

Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🔗 Enlaces Útiles

- [📚 API Documentation](https://docs.github.com/en/rest/users/users#get-a-user)
- [🔧 GitHub Developer](https://developer.github.com/)
- [📦 NPM Package](https://www.npmjs.com/package/api_github)
- [🐛 Repository](https://github.com/Ferangular/npm-basic)
- [📝 Issues](https://github.com/Ferangular/npm-basic/issues)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. **Fork** el proyecto
2. **Crea una rama** (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -am 'Add nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre un Pull Request**

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias:

- 🐛 [Reportar un issue](https://github.com/Ferangular/npm-basic/issues)
- 💡 [Sugerir mejora](https://github.com/Ferangular/npm-basic/issues/new?template=feature_request.md)
- 📧 Contactar al autor: fer@example.com

---

**🚀 Desarrollado con ❤️ por [Fer](https://github.com/Ferangular)**

*API GitHub - Cliente simple y eficiente para obtener datos de usuarios de GitHub*
