# Proyecto 1 Matemáticas - Librería Básica de Matemáticas

## Descripción
Librería de matemáticas sencilla para aprender NodeJS y publicar paquetes en NPM. Este proyecto contiene operaciones matemáticas básicas con validación de tipos de datos.

## Funciones Disponibles

### suma(n1, n2)
Realiza la suma de dos números.
```javascript
const m = require('.');
console.log(m.suma(1, 1));  // 2
console.log(m.suma(1, 12)); // 13
```

### resta(n1, n2)
Realiza la resta de dos números.
```javascript
console.log(m.resta(1, 12)); // -11
```

### multiplicacion(n1, n2)
Realiza la multiplicación de dos números.
```javascript
console.log(m.multiplicacion(1, 12)); // 12
console.log(m.multiplicacion(2, 12)); // 24
```

### division(n1, n2)
Realiza la división de dos números.
```javascript
console.log(m.division(12, 2)); // 6
```

## Instalación
```bash
npm install intro-node-js
```

## Uso
```javascript
const math = require('intro-node-js');

// Realizar operaciones
const resultadoSuma = math.suma(5, 3);
const resultadoResta = math.resta(10, 4);
const resultadoMultiplicacion = math.multiplicacion(6, 7);
const resultadoDivision = math.division(20, 5);

console.log('Suma:', resultadoSuma);
console.log('Resta:', resultadoResta);
console.log('Multiplicación:', resultadoMultiplicacion);
console.log('División:', resultadoDivision);
```

## Validación de Datos
La librería incluye validación automática para asegurar que ambos parámetros sean numéricos. Si alguno de los valores no es un número, se mostrará un mensaje de error en la consola.

## Pruebas con Node.js REPL
Puedes probar la librería directamente usando la consola interactiva de Node.js:

```bash
node
```

Una vez en la consola:
```javascript
> const m = require('.')
undefined
> console.log(m.suma(1,1))
2
undefined
> console.log(m.suma(1,12))
13
undefined
> console.log(m.resta(1,12))
-11
undefined
> console.log(m.multiplicacion(1,12))
12
undefined
> console.log(m.multiplicacion(2,12))
24
undefined
> console.log(m.division(12,2))
6
undefined
```

## Información del Paquete
- **Nombre**: intro-node-js
- **Versión**: 1.0.0
- **Descripción**: Proyecto de matemáticas sencillo para aprender NodeJS y subirlo a NPM
- **Autor**: Fer
- **Licencia**: ISC
- **Palabras clave**: npm, nodejs, math, matematica, suma, resta, division, multi, basico

## Repositorio
- **GitHub**: https://github.com/Ferangular/npm-basic
- **Issues**: https://github.com/Ferangular/npm-basic/issues

## Comandos Útiles para Desarrollo

### Crear paquete
```bash
npm pack
```

### Instalación local
```bash
npm install .
```

### Ejecutar pruebas
```bash
npm test
```

### Usar npm link para desarrollo local
```bash
npm link
```

## Estructura del Proyecto
```
npm-basic/
├── index.js              # Archivo principal con funciones matemáticas
├── package.json          # Configuración del paquete
├── README.md             # Documentación
└── prueba.js             # Archivo de pruebas
```

---
*Proyecto 1 Matemáticas - Librería básica para aprender NodeJS y NPM*
