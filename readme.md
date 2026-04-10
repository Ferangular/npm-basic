# Curso: NPM. Desarrollo y publicación de librerías en JS, TS, Angular y ReactJS

## Descripción del Curso
Curso práctico de Udemy para aprender a crear librerías desde cero o modificar librerías existentes, gestionándolas y publicándolas en el repositorio NPM.

## Objetivo Principal
- Crear librerías propias desde 0
- Modificar librerías existentes
- Gestionar publicación y actualización en NPM
- Reutilizar código entre proyectos de manera eficiente

## ¿Por qué es importante?
Evita la práctica del "copy/paste" y permite:
- Mantenimiento simplificado del código
- Actualizaciones centralizadas
- Reutilización en múltiples proyectos
- Mejor organización del código

## Tecnologías y Herramientas que aprenderás:

### Fundamentos
- **Git / Github**: Control de versiones para gestión de cambios y copias de seguridad
- **NPM**: Node Package Manager - repositorio central de librerías
- **Node.js**: Desarrollo de librerías en JavaScript

### Testing y Calidad
- **Mocha**: Framework para pruebas automatizadas
- **Travis CI**: Integración continua para detección automática de errores
- **Coveralls**: Informes de cobertura de código en tests

### Documentación
- **Compodoc**: Generación automática de documentación

### Frameworks Específicos
- **Node Typescript**: Librerías en TypeScript
- **Angular**: Desarrollo de librerías para Angular
- **ReactJS**: Creación de librerías compatibles con React

### Hosting y Despliegue
- **Firebase Hosting**: Publicación de documentación y contenido estático

### Colaboración
- **Open Source**: Contribución en proyectos ajenos y gestión de contribuciones propias

## Comandos Básicos del Curso

### Creación de paquetes
```bash
npm pack
```

### Instalación local de paquetes
Para instalar el paquete localmente en la carpeta de pruebas:
```bash
npm i C:\cursos\npm-basic\introduccion-node-js\intro-node-js-1.0.0.tgz
```

O usando la ruta relativa:
```bash
npm i ../introduccion-node-js/intro-node-js-1.0.0.tgz
```

### Instalación desde GitHub
Para instalar directamente desde el repositorio de GitHub:
```bash
npm install npm-js-ts-angular-modules-course/introduccion-node-js
```

O usando la URL completa:
```bash
npm install https://github.com/npm-js-ts-angular-modules-course/introduccion-node-js.git
```

Otra alternativa usando el formato corto:
```bash
npm i npm-js-ts-angular-modules-course/introduccion-node-js
```

### Actualización de paquetes con versión específica
Para instalar o actualizar a una versión específica desde GitHub:
```bash
npm install npm-js-ts-angular-modules-course/introduccion-node-js#v1.0.0
```

También puedes usar:
```bash
npm i npm-js-ts-angular-modules-course/introduccion-node-js#v1.0.0
```

### Enlace simbólico local (npm link)
Para crear un enlace simbólico entre un paquete local y tu proyecto:
```bash
npm link
```

**¿Para qué sirve npm link?**
- Permite desarrollar y probar un paquete localmente sin necesidad de publicarlo
- Crea un enlace simbólico en la carpeta global de npm
- Evita tener que reinstalar el paquete después de cada cambio
- Útil durante el desarrollo de librerías

**Uso típico:**
1. En la carpeta del paquete: `npm link`
2. En el proyecto que lo usa: `npm link nombre-del-paquete`

Para eliminar el enlace:
```bash
npm unlink nombre-del-paquete
```

### Prueba del paquete con Node.js REPL
Para probar tu paquete localmente usando la consola interactiva de Node.js:

```bash
node
```

Una vez en la consola de Node.js:
```javascript
> const lib = require('intro-node-js')
undefined
> lib.hola()
Hola Mundo!!!
undefined
> .exit
```

**Comandos útiles en REPL:**
- `.help` - Muestra ayuda
- `.exit` - Sale de la consola
- `.clear` - Limpia el contexto
- Ctrl+C (dos veces) - Forzar salida

Esta forma es ideal para probar rápidamente las funciones de tu paquete sin necesidad de crear archivos de prueba.

### Desinstalación de paquetes
Para remover un paquete de node_modules:
```bash
npm uninstall intro-node-js
```

O también puedes usar:
```bash
npm un intro-node-js
```

## Estructura del Proyecto
```
npm-basic/
├── introduccion-node-js/          # Paquete de ejemplo
│   ├── package.json              # Configuración del paquete
│   ├── index.js                  # Archivo principal
│   └── intro-node-js-1.0.0.tgz   # Paquete comprimido
├── pruebas/                      # Carpeta de pruebas
│   ├── package.json              # Dependencias de prueba
│   └── node_modules/            # Módulos instalados
└── readme.md                     # Este archivo
```

## Información del Paquete de Ejemplo
- **Nombre**: intro-node-js
- **Versión**: 1.0.0
- **Descripción**: Módulo Node JS de introducción
- **Autor**: 
- **Licencia**: MIT

## Uso del Archivo de Pruebas - Tutorial Educativo

### 📁 ¿Qué es el archivo `pruebas/index.js`?

Este archivo es tu **laboratorio de pruebas** donde puedes verificar que tu librería funciona correctamente antes de publicarla. Es una práctica fundamental en el desarrollo de software.

### 🎯 Objetivo del Archivo de Pruebas

El archivo `pruebas/index.js` te permite:
- **Validar funcionalidad**: Comprobar que cada función trabaja como esperas
- **Detectar errores**: Encontrar problemas antes de que lleguen a los usuarios
- **Documentar uso**: Servir como ejemplo de cómo se usa tu librería
- **Asegurar calidad**: Garantizar que las nuevas actualizaciones no rompen lo existente

### 🔍 Estructura del Archivo de Pruebas

```javascript
// Importamos las funciones que queremos probar
import { esPar, operacion } from '../dist/index.js';

// Sección 1: Pruebas de función esPar
console.log('=== Probando función esPar ===');
console.log('¿Es 8 par?', esPar(8));    // true
console.log('¿Es 7 par?', esPar(7));    // false
console.log('¿Es 0 par?', esPar(0));    // true

// Sección 2: Pruebas de función operacion
console.log('\n=== Probando función operacion ===');
console.log('5 + 3 =', operacion('+', 5, 3));   // 8
console.log('10 - 4 =', operacion('-', 10, 4)); // 6
console.log('3 * 7 =', operacion('*', 3, 7));   // 21
console.log('15 / 3 =', operacion('/', 15, 3)); // 5
console.log('Operación inválida:', operacion('x', 5, 3)); // undefined
```

### 🚀 ¿Cómo ejecutar las pruebas?

**Paso 1: Asegúrate de tener el código compilado**
```bash
npx tsc
```
*Esto convierte tu TypeScript (`lib/index.ts`) a JavaScript (`dist/index.js`)*

**Paso 2: Ejecuta el archivo de pruebas**
```bash
node pruebas/index.js
```

**Paso 3: Observa los resultados**
Deberías ver algo como:
```
=== Probando función esPar ===
¿Es 8 par? true
¿Es 7 par? false
¿Es 0 par? true

=== Probando función operacion ===
5 + 3 = 8
10 - 4 = 6
3 * 7 = 21
15 / 3 = 5
Operación inválida: undefined
```

### 📚 Conceptos Educativos Clave

#### 1. **Importación de Módulos**
```javascript
import { esPar, operacion } from '../dist/index.js';
```
- `import`: Palabra clave para traer código de otros archivos
- `{ esPar, operacion }`: Funciones específicas que queremos usar
- `from '../dist/index.js'`: Ruta al archivo compilado

#### 2. **Pruebas por Consola**
```javascript
console.log('¿Es 8 par?', esPar(8));
```
- `console.log()`: Función para mostrar información en la terminal
- Combinamos texto descriptivo con el resultado de la función
- Esto nos ayuda a entender qué estamos probando

#### 3. **Casos de Prueba**
Para cada función probamos:
- **Casos positivos**: Entradas que deberían funcionar (8, 0 para esPar)
- **Casos negativos**: Entradas que deberían fallar (7 para esPar)
- **Casos límite**: Valores extremos (0 para esPar)
- **Casos inválidos**: Entradas incorrectas ('x' para operacion)

### 🛠️ Buenas Prácticas de Testing

#### ✅ Qué hacer:
- **Prueba cada función**: Asegúrate que todas tus funciones sean probadas
- **Usa datos variados**: Prueba con números positivos, negativos, cero
- **Sé descriptivo**: Usa `console.log()` que explique qué estás probando
- **Prueba errores**: Verifica cómo se comporta con entradas inválidas

#### ❌ Qué evitar:
- **No asumas resultados**: Siempre verifica el output real
- **No pruebes solo un caso**: Un solo caso no garantiza que funcione siempre
- **No ignores errores**: Si algo falla, investiga por qué

### 🔄 Flujo de Trabajo Recomendado

1. **Escribe código** en `lib/index.ts`
2. **Compila** con `npx tsc`
3. **Escribe pruebas** en `pruebas/index.js`
4. **Ejecuta pruebas** con `node pruebas/index.js`
5. **Corrige errores** si los hay
6. **Repite** hasta que todas las pruebas pasen

### 🎓 ¿Por qué es importante esto?

- **Calidad**: Aseguras que tu librería funciona correctamente
- **Confianza**: Sabes que no romperás funcionalidad existente
- **Documentación**: Las pruebas sirven como ejemplos de uso
- **Mantenimiento**: Facilita encontrar y corregir errores en el futuro

### 🚀 Siguiente Nivel

Cuando quieras avanzar, puedes explorar:
- **Frameworks de testing**: Jest, Mocha, Chai
- **Pruebas automatizadas**: Integración con CI/CD
- **Coverage**: Medir qué porcentaje de tu código está siendo probado
- **Tests asíncronos**: Para funciones que trabajan con promesas o callbacks

---

## Próximos Pasos
1. Practicar la creación de paquetes locales
2. Configurar tests con Mocha
3. Aprender a publicar en NPM
4. Explorar integración continua
5. Desarrollar librerías para frameworks específicos

## Referencias Útiles

### Documentación y Recursos
- **Markdown**: https://markdown.es/ - Guía completa de sintaxis Markdown

### Ejemplos de Paquetes en NPM
- **Paquete ejemplo**: https://www.npmjs.com/package/proyecto-1a-matematicas
- **Versión específica**: https://www.npmjs.com/package/proyecto-1-matematicas/v/1.1.1

### Repositorios y Releases
- **Releases en GitHub**: https://github.com/npm-js-ts-angular-modules-course/proyecto-1a-matematicas/releases

---
*Curso: NPM. Desarrollo y publicación de librerías en JS, TS, Angular y ReactJS*
