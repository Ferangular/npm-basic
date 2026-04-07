# Crear fichero - Tutorial Completo NPM

Librería educativa para aprender a crear, publicar y gestionar paquetes en NPM. Muestra mensajes en colores personalizados para terminal Node.js.

## 📚 Objetivo Educativo

Este proyecto es un tutorial práctico que cubre:
- ✅ Creación de librerías Node.js
- ✅ Testing con Mocha y Chai
- ✅ Configuración de package.json
- ✅ Publicación en NPM
- ✅ Gestión de versiones
- ✅ Eliminación de paquetes

## 🚀 Instalación

```bash
npm install cli-file-creator-v10
```

## 📖 Uso Básico

### Como CLI (Línea de Comandos)

```bash
# Instalar dependencias
npm install

# Ejecutar el CLI
node index.js
```

**Ejemplo de funcionamiento:**
```
   _   _   _   _   _   _   _     _   _   _   _   _   _   _  
  / \ / \ / \ / \ / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ / \
 ( C | r | e | a | d | o | r ) ( F | i | c | h | e | r | o | s )
  \_/ \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/

? ¿Cómo se va a llamar tu fichero? (sin la extensión) hola
? ¿Qué extensión tiene tu fichero? .js
{ FICHERO: 'hola', EXTENSION: 'js' }
¡Muy bien! Fichero correctamente creado en el directorio C:\cursos\npm-basic/hola.js
```

### Como Librería (Require)

```javascript
const creator = require('cli-file-creator-v10');

// Crear fichero directamente
creator.crearFichero('miArchivo', 'js');  // Crea miArchivo.js

// Ejecutar flujo completo
creator.ejecutar();  // Inicia preguntas y creación
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Ver resultados esperados
✓ Función ok
✓ Función info  
✓ Función aviso
✓ Función error
✓ No llama al console log
```

## 📦 Publicar en NPM - Paso a Paso

### 1. Preparar el Paquete
```bash
# Verificar package.json
cat package.json

# Limpiar archivos innecesarios
# (usar .npmignore para excluir)
```

### 2. Autenticación en NPM
```bash
# Iniciar sesión
npm login

# Verificar autenticación
npm whoami
```

### 3. Publicar
```bash
# Publicar paquete
npm publish

# Verificar publicación
npm view ferconsole-log
```

### 4. Probar Instalación
```bash
# Instalar globalmente para probar
npm install -g ferconsole-log

# O instalar en otro proyecto
npm install ferconsole-log
```

## 🗑️ Eliminar Paquete de NPM

### Opción 1: Eliminar versión específica
```bash
npm unpublish ferconsole-log@1.0.0
```

### Opción 2: Eliminar todo el paquete (solo 24h después de publicar)
```bash
npm unpublish ferconsole-log --force
```

### Opción 3: Despublicar (mantiene nombre pero no se puede instalar)
```bash
npm deprecate ferconsole-log@"*" "Este paquete está obsoleto"
```

**⚠️ Importante:** Solo puedes eliminar paquetes dentro de las primeras 24 horas. Después solo puedes deprecate.

## 📋 Estructura del Proyecto

```
ferconsole-log/
├── index.js              # Código principal
├── test/
│   └── index.js          # Tests con Mocha
├── package.json          # Configuración del paquete
├── .npmignore           # Archivos a excluir
└── readme.md           # Esta documentación
```

## 🔧 Comandos Útiles

### Desarrollo
```bash
npm test                 # Ejecutar tests
npm run test:watch      # Tests en modo watch
npm link                # Enlace simbólico local
```

### Publicación
```bash
npm version patch        # 1.0.0 → 1.0.1
npm version minor        # 1.0.0 → 1.1.0  
npm version major        # 1.0.0 → 2.0.0
npm publish             # Publicar nueva versión
```

### Verificación
```bash
npm view ferconsole-log  # Ver info del paquete
npm info ferconsole-log # Ver detalles completos
```

## 🎯 Conceptos Aprendidos

### package.json Clave
```json
{
  "name": "ferconsole-log",
  "version": "1.0.0",
  "description": "Log para consola personalizado",
  "main": "index.js",
  "scripts": {
    "test": "mocha test/**/*.js"
  },
  "keywords": ["console", "log", "colors"],
  "author": "Tu Nombre",
  "license": "MIT"
}
```

### .npmignore Esencial
```
test/
node_modules/
.idea/
*.log
.DS_Store
```

### Testing con Mocha + Chai
```javascript
const { expect } = require('chai');
const sinon = require('sinon');

describe('Test de funciones', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });
  
  afterEach(() => {
    console.log.restore();
  });
  
  it('debe llamar a console.log', () => {
    logger.ok('test');
    expect(console.log.called).to.be.true;
  });
});
```

## 🚨 Errores Comunes y Soluciones

### Error 404 al publicar
- **Causa**: No autenticado en npm
- **Solución**: `npm login`

### Error "package already exists"
- **Causa**: Nombre ya en uso
- **Solución**: Cambiar nombre en package.json

### Error "cannot unpublish"
- **Causa**: Pasaron más de 24 horas
- **Solución**: Usar `npm deprecate` en lugar de unpublish

## 📚 Recursos Adicionales

- **Documentación NPM**: https://docs.npmjs.com/
- **Mocha Testing**: https://mochajs.org/
- **Chai Assertions**: https://www.chaijs.com/
- **SemVer Versioning**: https://semver.org/

## 🏆 Resumen del Proceso

1. ✅ **Crear código funcional**
2. ✅ **Escribir tests automáticos**
3. ✅ **Configurar package.json**
4. ✅ **Crear .npmignore**
5. ✅ **Autenticarse en npm**
6. ✅ **Publicar paquete**
7. ✅ **Probar instalación**
8. ✅ **Gestionar versiones**

---

**🎓 ¡Felicidades! Ahora sabes crear y publicar paquetes NPM profesionalmente.**

*Autor: Fernando*  
*Licencia: MIT*
