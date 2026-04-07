# CLI Generator de Proyectos - Tutorial Completo NPM

CLI educativo para aprender a crear, publicar y gestionar paquetes en NPM. Genera proyectos completos con templates personalizables.

## 📚 Objetivo Educativo

Este proyecto es un tutorial práctico que cubre:
- ✅ Creación de CLI con Node.js
- ✅ Sistema de templates dinámicos
- ✅ Generación de proyectos (Node.js, TypeScript)
- ✅ Testing con Mocha y Chai
- ✅ Configuración de package.json
- ✅ Publicación en NPM
- ✅ Gestión de versiones y templates

## 🚀 Instalación

```bash
npm install node-cli-generator-project
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
? ¿Qué tipo de proyecto quieres generar? npm-js
? ¿Cuál es el nombre del proyecto? mi-super-app

CREATE templates/npm-js/index.js (245 bytes)
CREATE templates/npm-js/package.json (156 bytes)
CREATE templates/npm-js/README.md (89 bytes)

Instalando las dependencias en /path/mi-super-app
npm packages installed...
```

### Como Librería (Require)

```javascript
const generator = require('node-cli-generator-project');

// Crear proyecto directamente
generator.createProject('miApp', 'npm-js', { author: 'John Doe' });

// Ejecutar flujo completo
generator.ejecutar();  // Inicia preguntas y creación
```

## 🗂️ Sistema de Templates

### Estructura de Templates
```
templates/
├── npm-js/              # Template Node.js básico
│   ├── index.js          # Archivo principal
│   ├── package.json      # Configuración con variables
│   └── README.md         # Documentación
├── npm-ts/              # Template TypeScript
│   ├── lib/
│   │   └── index.ts
│   ├── test/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── react-app/            # Template React (futuro)
    ├── src/
    ├── public/
    └── package.json
```

### Variables en Templates
Usa EJS para reemplazar variables dinámicamente:

**Template package.json:**
```json
{
  "name": "<%= projectName %>",
  "version": "1.0.0",
  "description": "Proyecto <%= projectName %>",
  "main": "index.js",
  "author": "<%= author || 'Anonymous' %>",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  }
}
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
npm view node-cli-generator-project
```

### 4. Probar Instalación
```bash
# Instalar globalmente para probar
npm install -g node-cli-generator-project

# O instalar en otro proyecto
npm install node-cli-generator-project
```

## 🗑️ Eliminar Paquete de NPM

### Opción 1: Eliminar versión específica
```bash
npm unpublish node-cli-generator-project@1.0.0
```

### Opción 2: Eliminar todo el paquete (solo 24h después de publicar)
```bash
npm unpublish node-cli-generator-project --force
```

### Opción 3: Despublicar (mantiene nombre pero no se puede instalar)
```bash
npm deprecate node-cli-generator-project@"*" "Este paquete está obsoleto"
```

**⚠️ Importante:** Solo puedes eliminar paquetes dentro de las primeras 24 horas. Después solo puedes deprecate.

## 📋 Estructura del Proyecto

```
node-cli-generator-project/
├── index.js              # CLI principal
├── utils/
│   └── templates.js      # Motor de templates
├── templates/            # Plantillas de proyectos
│   ├── npm-js/          # Template Node.js
│   ├── npm-ts/          # Template TypeScript
│   └── react-app/       # Template React (futuro)
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
npm view node-cli-generator-project  # Ver info del paquete
npm info node-cli-generator-project # Ver detalles completos
```

## 🎯 Conceptos Aprendidos

### package.json Clave
```json
{
  "name": "node-cli-generator-project",
  "version": "1.0.0",
  "description": "CLI para generar proyectos con templates",
  "main": "index.js",
  "bin": {
    "create-project": "./index.js"
  },
  "scripts": {
    "test": "node pruebas/index.js"
  },
  "keywords": ["cli", "generator", "templates", "node", "typescript"],
  "author": "Fernando",
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
ficheros/
```

### Template Engine con EJS
```javascript
// utils/templates.js
const ejs = require('ejs');

const render = (template, variables) => {
  return ejs.render(template, variables);
};

module.exports = { render };
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
    generator.ejecutar();
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

### Error "Cannot find module './utils/templates'"
- **Causa**: Archivo utils/templates.js no existe
- **Solución**: Crear el archivo con el motor de templates

## 📚 Recursos Adicionales

- **Documentación NPM**: https://docs.npmjs.com/
- **Mocha Testing**: https://mochajs.org/
- **Chai Assertions**: https://www.chaijs.com/
- **EJS Templates**: https://ejs.co/
- **SemVer Versioning**: https://semver.org/

## 🏆 Resumen del Proceso

1. ✅ **Crear CLI funcional**
2. ✅ **Implementar sistema de templates**
3. ✅ **Escribir tests automáticos**
4. ✅ **Configurar package.json**
5. ✅ **Crear .npmignore**
6. ✅ **Autenticarse en npm**
7. ✅ **Publicar paquete**
8. ✅ **Probar instalación**
9. ✅ **Gestionar versiones y templates**

---

**🎓 ¡Felicidades! Ahora sabes crear CLIs profesionales con sistema de templates.**

*Autor: Fernando*  
*Licencia: MIT*
