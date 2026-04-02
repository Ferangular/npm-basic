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
- **Autor**: Anartz Mugika Ledo
- **Licencia**: MIT

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
