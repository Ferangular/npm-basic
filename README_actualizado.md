# API GitHub - Cliente para la API de GitHub

## Descripción
Módulo Node.js para obtener datos de usuarios desde la API de GitHub de forma sencilla y rápida. Ideal para aprender a consumir APIs REST y manejar peticiones HTTP asíncronas.

## 🚀 Características
- ✅ Obtención de datos de usuario de GitHub
- ✅ Manejo automático de errores
- ✅ Respuestas estructuradas
- ✅ Soporte para autenticación futura
- ✅ Licencia MIT (código abierto)

## 📦 Instalación

### Dependencias Requeridas
El proyecto requiere **axios** para realizar peticiones HTTP:

```bash
npm install axios@1.13.5
```

### Instalación Completa
```bash
# Clonar el proyecto
git clone https://github.com/Ferangular/npm-basic.git
cd npm-basic

# Instalar dependencias
npm install

# Verificar instalación
npm list axios
```

### Verificación de Seguridad
```bash
# Audit de vulnerabilidades
npm audit

# Salida esperada:
# found 0 vulnerabilities
```

### Versiones Compatibles
- ✅ **axios@1.13.5**: Versión actual (sin vulnerabilidades)
- ⚠️ **axios@<1.6.0**: No recomendado (vulnerabilidades conocidas)
- ❌ **axios@<1.0.0**: Incompatible con el proyecto

### Notas de Seguridad
> **Importante**: Se han detectado vulnerabilidades críticas en versiones antiguas de axios (<1.6.0). 
> 
> - **CVE-2023-45857**: SSRF en axios <1.6.0
> - **CVE-2023-4217**: Prototype pollution en axios <1.5.0
> 
> **Solución**: Usar siempre `axios@1.13.5` o superior

### 🔍 Recomendaciones para detectar posibles compromisos en dependencias

Durante la verificación de seguridad del proyecto, se han aplicado una serie de comprobaciones clave para detectar posibles manipulaciones o ataques en dependencias instaladas.

#### ✅ Aspectos verificados en este proyecto

- **Versión instalada**
  - Se utiliza `axios@1.13.5` 
  - ✔️ No corresponde a ninguna versión comprometida conocida
  - ✔️ Versión estable y segura

---

- **Ausencia de scripts de instalación peligrosos**

Se ha revisado el `package.json` de la dependencia instalada:

```bash
Get-Content .\node_modules\axios\package.json
✔️ No se han encontrado los siguientes scripts:
preinstall
install
postinstall
👉 Estos scripts son especialmente sensibles, ya que pueden ejecutar código automáticamente durante la instalación de dependencias.
```

#### 🛡️ Comandos de Verificación Adicionales

```bash
# Verificar scripts en package.json de dependencias
Get-Content .\node_modules\axios\package.json | Select-String "preinstall|install|postinstall"

# Verificar hashes de integridad
npm audit --audit-level moderate

# Listar todas las dependencias con sus versiones
npm ls --depth=0

# Verificar si hay dependencias duplicadas o conflictivas
npm ls --depth=1 --json | ConvertFrom-Json
```

#### ⚠️ Signos de Alerta a Monitorear

- **Scripts sospechosos** en `package.json` de dependencias
- **Versiones antiguas** con vulnerabilidades conocidas
- **Dependencias sin mantener** (sin actualizaciones recientes)
- **Cambios inesperados** en tamaños de archivo
- **Fuentes no oficiales** en el registro de npm

#### 📋 Checklist de Seguridad Antes de Instalar

```bash
# 1. Verificar reputación del paquete
npm view axios

# 2. Revisar historial de seguridad
npm audit axios

# 3. Verificar últimos commits
npm repo axios  # Revisar actividad reciente

# 4. Analizar dependencias transitivas
npm ls --all

# 5. Verificar integridad del paquete
npm ci  # Usar package-lock.json
```

### Instalación Automática
```bash
# Instalar versión segura automáticamente
npm install axios@^1.13.5

# O instalar la última versión segura
npm install axios@latest
```

## 📖 Uso Básico

### Obtener datos de un usuario
```javascript
const api = require('api_github');

// Obtener datos de un usuario
api.obtenerDatosDeUsuario('mugan86')
  .then(data => {
    if (data.message === undefined) {
      // Usuario encontrado
      console.log('✅ Usuario encontrado:');
      console.log(`👤 Login: ${data.login}`);
      console.log(`👤 Nombre: ${data.name}`);
      console.log(`📍 Ubicación: ${data.location}`);
      console.log(`📧 Email: ${data.email}`);
      console.log(`🔗 Perfil: ${data.html_url}`);
      console.log(`📊 Repos públicos: ${data.public_repos}`);
      console.log(`👥 Seguidores: ${data.followers}`);
      console.log(`🔄 Siguiendo: ${data.following}`);
    } else {
      // Error de la API
      console.error('❌ Error:', data.message);
    }
  })
  .catch(error => {
    console.error('❌ Error de conexión:', error);
  });
```

### Ejemplo completo
```javascript
const api = require('api_github');

async function mostrarUsuarioGitHub(username) {
  try {
    console.log(`🔍 Buscando usuario: ${username}...`);
    
    const data = await api.obtenerDatosDeUsuario(username);
    
    if (data.message) {
      console.log(`❌ Error: ${data.message}`);
      return;
    }
    
    console.log('\n📋 Información del usuario:');
    console.log('─'.repeat(30));
    console.log(`👤 Usuario: ${data.login}`);
    console.log(`🏷️  Nombre: ${data.name || 'No especificado'}`);
    console.log(`📝 Bio: ${data.bio || 'Sin biografía'}`);
    console.log(`📍 Ubicación: ${data.location || 'No especificada'}`);
    console.log(`🏢 Empresa: ${data.company || 'No especificada'}`);
    console.log(`📧 Email: ${data.email || 'No público'}`);
    console.log(`🌐 Blog: ${data.blog || 'No especificado'}`);
    console.log(`🔗 GitHub: ${data.html_url}`);
    console.log(`📊 Estadísticas:`);
    console.log(`   • Repositorios públicos: ${data.public_repos}`);
    console.log(`   • Seguidores: ${data.followers}`);
    console.log(`   • Siguiendo: ${data.following}`);
    console.log(`   • Creado: ${new Date(data.created_at).toLocaleDateString()}`);
    console.log(`   • Actualizado: ${new Date(data.updated_at).toLocaleDateString()}`);
    
  } catch (error) {
    console.error('❌ Error al obtener datos:', error.message);
  }
}

// Usar la función
mostrarUsuarioGitHub('octocat');
```

## 📊 Respuesta de la API

La función `obtenerDatosDeUsuario` retorna un objeto con la siguiente estructura:

```javascript
{
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "name": "The Octocat",
  "company": "@github",
  "blog": "https://github.blog",
  "location": "San Francisco",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 8,
  "followers": 3234,
  "following": 9,
  "created_at": "2011-01-25T18:44:36Z",
  "updated_at": "2023-11-20T18:37:55Z"
}
```

## 🛡️ Manejo de Errores

### Errores Comunes
```javascript
api.obtenerDatosDeUsuario('usuarioquenexiste')
  .then(data => {
    if (data.message) {
      // Usuario no encontrado
      console.log('❌', data.message); // "Not Found"
    }
  });
```

### Errores de Conexión
```javascript
api.obtenerDatosDeUsuario('usuario')
  .catch(error => {
    if (error.code === 'ENOTFOUND') {
      console.log('❌ Error de red: No se puede conectar a GitHub');
    } else if (error.code === 'ECONNREFUSED') {
      console.log('❌ Error de conexión: Conexión rechazada');
    } else {
      console.log('❌ Error desconocido:', error.message);
    }
  });
```

## 📁 Estructura del Proyecto
```
api_github/
├── index.js              # Módulo principal
├── package.json          # Configuración del paquete
├── README.md             # Documentación
├── LICENSE              # Licencia MIT
├── .gitignore           # Archivos ignorados por Git
└── .npmignore           # Archivos ignorados por NPM
```

## ⚙️ Configuración del Paquete

### package.json
```json
{
  "name": "api_github",
  "version": "1.0.0",
  "description": "Acceso a la API de GitHub",
  "main": "index.js",
  "scripts": {
    "test": "node pruebas/index.js"
  },
  "keywords": [
    "npm",
    "nodejs",
    "api",
    "github",
    "rest",
    "axios"
  ],
  "author": "Fer",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Ferangular/npm-basic.git"
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

### Dependencias del Proyecto
- **axios@^1.13.5**: Cliente HTTP para peticiones a la API
  - ✅ **Seguro**: Sin vulnerabilidades conocidas
  - ✅ **Actualizado**: Última versión estable
  - ✅ **Compatible**: Soporte para Promise y async/await

- **chai@^6.2.2**: Librería de aserciones para testing
- **mocha@^11.7.5**: Framework de testing
- **nock@^14.0.11**: Mocking de HTTP requests

### Auditoría de Seguridad
```bash
# Verificar vulnerabilidades
npm audit

# Salida esperada:
# found 0 vulnerabilities

# Verificar dependencias
npm ls --depth=0
```

### Actualización de Dependencias
```bash
# Verificar versiones desactualizadas
npm outdated

# Actualizar a versiones seguras
npm update

# Actualizar axios específicamente
npm install axios@latest
```

## 🧪 Pruebas

### Dependencias de Desarrollo
El proyecto incluye las siguientes dependencias para testing:

```json
{
  "devDependencies": {
    "chai": "^6.2.2",      // Librería de aserciones
    "mocha": "^11.7.5",     // Framework de testing
    "nock": "^14.0.11"     // Mocking de HTTP requests
  }
}
```

### Instalación de Dependencias de Testing
```bash
# Instalar dependencias de desarrollo
npm install --save-dev chai mocha nock

# Verificar instalación
npm list --depth=0

# Salida esperada:
# api_github@1.0.0
# ├── axios@1.13.5
# └─┬ chai@6.2.2
#   └── assertion-error@2.0.1
```

### ✅ Prueba Funcional Realizada

#### Comando de Verificación de Seguridad
```bash
npm audit fix --force
```

#### Prueba en Node.js REPL
```javascript
// Iniciar Node.js
node

// Cargar el módulo
var api = require('./')

// Probar con el usuario del proyecto
api.obtenerDatosDeUsuario('Ferangular').then(data=> console.log(data))
```

#### 📊 Resultado Obtenido
```json
{
  "login": "Ferangular",
  "id": 154634336,
  "node_id": "U_kgDOCTeIYA",
  "avatar_url": "https://avatars.githubusercontent.com/u/154634336?v=4",
  "url": "https://api.github.com/users/Ferangular",
  "html_url": "https://github.com/Ferangular",
  "type": "User",
  "name": "Fer",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 33,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-12-22T20:30:50Z",
  "updated_at": "2024-05-21T21:19:42Z"
}
```

### ✅ Verificación Exitosa

- **🔒 Seguridad**: `npm audit fix --force` ejecutado sin errores
- **📡 API**: Conexión exitosa a GitHub API
- **👤 Usuario**: Datos de 'Ferangular' obtenidos correctamente
- **📊 Datos**: 33 repositorios públicos, 0 seguidores
- **🔗 Enlaces**: URLs de perfil y API funcionando
- **📅 Fechas**: Creación y actualización correctas

### 🧪 Ejecutar Pruebas
```bash
npm test
```

### Prueba Manual (Recomendado)
```javascript
const api = require('./index.js');

// Test 1: Usuario existente
api.obtenerDatosDeUsuario('Ferangular')
  .then(data => {
    console.log('✅ Test 1 - Usuario encontrado:');
    console.log(`👤 ${data.name} (@${data.login})`);
    console.log(`📊 ${data.public_repos} repositorios`);
    console.log(`🔗 ${data.html_url}`);
  })
  .catch(error => {
    console.error('❌ Error:', error.message);
  });

// Test 2: Usuario no existente
api.obtenerDatosDeUsuario('usuarioquenexiste12345')
  .then(data => {
    if (data.message) {
      console.log('✅ Test 2 - Error controlado:', data.message);
    }
  })
  .catch(error => {
    console.error('❌ Error inesperado:', error.message);
  });
```

## 📚 Documentación de GitHub API

### Endpoint utilizado
- **URL**: `https://api.github.com/users/{username}`
- **Método**: `GET`
- **Autenticación**: Opcional (para mayor límite de velocidad)
- **Rate Limit**: 60 requests/hora sin autenticación

### Límites de Velocidad
```javascript
// Headers de respuesta para límites
{
  "X-RateLimit-Limit": "60",
  "X-RateLimit-Remaining": "59",
  "X-RateLimit-Reset": "1372700873"
}
```

## 🚀 Mejoras Futuras

### Planeado para v2.0.0
- [ ] Autenticación con token personal
- [ ] Obtener repositorios del usuario
- [ ] Búsqueda de usuarios
- [ ] Paginación de resultados
- [ ] Caché de respuestas
- [ ] TypeScript definitions
- [ ] Tests unitarios completos

### Sugerencias
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

Este proyecto está licenciado bajo la **MIT License**. Puedes ver el archivo [LICENSE](LICENSE) para más detalles.

### Resumen de la licencia
- ✅ Uso comercial permitido
- ✅ Modificación permitida
- ✅ Distribución permitida
- ✅ Uso privado permitido
- ❌ Responsabilidad no garantizada

## 🔗 Enlaces Útiles

- [API Documentation](https://docs.github.com/en/rest/users/users#get-a-user)
- [GitHub Developer](https://developer.github.com/)
- [NPM Package](https://www.npmjs.com/package/api_github)
- [Repository](https://github.com/Ferangular/npm-basic)
- [Issues](https://github.com/Ferangular/npm-basic/issues)

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Add nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias:

- 🐛 [Reportar un issue](https://github.com/Ferangular/npm-basic/issues)
- 💡 [Sugerir mejora](https://github.com/Ferangular/npm-basic/issues/new?template=feature_request.md)
- 📧 Contactar al autor: fer@example.com

---

**Desarrollado con ❤️ por [Fer](https://github.com/Ferangular)**

*API GitHub - Cliente simple para obtener datos de usuarios de GitHub*
