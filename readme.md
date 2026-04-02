# Proyecto 1 Matemáticas - Librería Básica de Matemáticas

## Descripción
Librería de matemáticas mejorada para aprender NodeJS y publicar paquetes en NPM. Este proyecto contiene operaciones matemáticas básicas y avanzadas con validación profesional de tipos de datos y manejo de errores con excepciones.

## Funciones Disponibles

### Operaciones Básicas

#### suma(n1, n2)
Realiza la suma de dos números.
```javascript
const m = require('proyecto-mate-1');
console.log(m.suma(1, 1));  // 2
console.log(m.suma(1, 12)); // 13
```

#### resta(n1, n2)
Realiza la resta de dos números.
```javascript
console.log(m.resta(1, 12)); // -11
```

#### multiplicacion(n1, n2)
Realiza la multiplicación de dos números.
```javascript
console.log(m.multiplicacion(1, 12)); // 12
console.log(m.multiplicacion(2, 12)); // 24
```

#### division(n1, n2)
Realiza la división de dos números con validación de división por cero.
```javascript
console.log(m.division(12, 2)); // 6
console.log(m.division(10, 0)); // Error: No se puede dividir por cero
```

### Operaciones Avanzadas (Nuevas en v1.1.0)

#### potencia(base, exponente)
Calcula la potencia de un número.
```javascript
console.log(m.potencia(2, 3)); // 8
console.log(m.potencia(5, 2)); // 25
```

#### raizCuadrada(n)
Calcula la raíz cuadrada de un número.
```javascript
console.log(m.raizCuadrada(16)); // 4
console.log(m.raizCuadrada(-9)); // Error: No se puede calcular la raíz cuadrada de un número negativo
```

## Instalación
```bash
npm install proyecto-mate-1
```

## Uso
```javascript
const math = require('proyecto-mate-1');

// Operaciones básicas
const resultadoSuma = math.suma(5, 3);
const resultadoResta = math.resta(10, 4);
const resultadoMultiplicacion = math.multiplicacion(6, 7);
const resultadoDivision = math.division(20, 5);

// Operaciones avanzadas
const resultadoPotencia = math.potencia(2, 3);
const resultadoRaiz = math.raizCuadrada(16);

console.log('Suma:', resultadoSuma);
console.log('Resta:', resultadoResta);
console.log('Multiplicación:', resultadoMultiplicacion);
console.log('División:', resultadoDivision);
console.log('Potencia:', resultadoPotencia);
console.log('Raíz Cuadrada:', resultadoRaiz);
```

## Validación de Datos y Manejo de Errores
La librería incluye validación profesional con excepciones:

### Validación de tipos
```javascript
try {
    math.suma('hola', 5); // Lanza TypeError
} catch (error) {
    console.log(error.message); // "Ambos parámetros deben ser números. Recibido: string, number"
}
```

### Validación de división por cero
```javascript
try {
    math.division(10, 0); // Lanza Error
} catch (error) {
    console.log(error.message); // "No se puede dividir por cero"
}
```

### Validación de raíz cuadrada
```javascript
try {
    math.raizCuadrada(-9); // Lanza Error
} catch (error) {
    console.log(error.message); // "No se puede calcular la raíz cuadrada de un número negativo"
}
```

## Pruebas Completas

### Ejecutar pruebas completas
```bash
node pruebas_completas.js
```

### Pruebas básicas
```bash
node prueba.js
```

Las pruebas incluyen:
- ✅ Operaciones básicas (suma, resta, multiplicación, división)
- ✅ Operaciones avanzadas (potencia, raíz cuadrada)
- ✅ Manejo de errores (tipos incorrectos, división por cero)
- ✅ Casos límite (Infinity, NaN)
- ✅ Funciones de compatibilidad

### Resultados de pruebas (v1.1.0)
```
=== PRUEBAS DE OPERACIONES BÁSICAS ===
--- SUMA ---
m.suma(1, 2): 3
m.suma(0, 0): 0
m.suma(-5, 10): 5
m.suma(3.5, 2.5): 6

--- RESTA ---
m.resta(11, 24): -13
m.resta(1, 2): -1
m.resta(10, 5): 5
m.resta(0, 0): 0

--- MULTIPLICACIÓN ---
m.multiplicacion(1, 24): 24
m.multiplicacion(3, 4): 12
m.multiplicacion(-2, 5): -10
m.multiplicacion(2.5, 4): 10

--- DIVISIÓN ---
m.division(10, 2): 5
m.division(1, 3): 0.3333333333333333
m.division(-6, 2): -3
m.division(7, 2): 3.5

=== PRUEBAS DE OPERACIONES AVANZADAS ===
--- POTENCIA ---
m.potencia(2, 3): 8
m.potencia(5, 2): 25
m.potencia(3, 0): 1
m.potencia(-2, 3): -8
m.potencia(4, 0.5): 2

--- RAÍZ CUADRADA ---
m.raizCuadrada(9): 3
m.raizCuadrada(16): 4
m.raizCuadrada(0): 0
m.raizCuadrada(2.25): 1.5

=== PRUEBAS DE ERRORES ===
--- ERRORES DE TIPO ---
Error en suma(true, 2): Ambos parámetros deben ser números. Recibido: boolean, number
Error en multiplicacion("eeee", "fhfjkdd"): Ambos parámetros deben ser números. Recibido: string, string

--- DIVISIÓN POR CERO ---
Error en division(10, 0): No se puede dividir por cero

--- RAÍZ CUADRADA DE NEGATIVO ---
Error en raizCuadrada(-9): No se puede calcular la raíz cuadrada de un número negativo
```

## Información del Paquete
- **Nombre**: proyecto-mate-1
- **Versión**: 1.1.0
- **Descripción**: Proyecto de matemáticas mejorado para aprender NodeJS y subirlo a NPM
- **Autor**: Fer
- **Licencia**: ISC
- **Palabras clave**: npm, nodejs, math, matematica, suma, resta, division, multi, basico, potencia, raiz, educativo

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
# o directamente
node pruebas_completas.js
```

### Usar npm link para desarrollo local
```bash
npm link
```

## Publicación en NPM

### Verificar disponibilidad del nombre del paquete
Antes de publicar, verifica que el nombre del paquete no esté tomado en NPM:

```bash
npm view proyecto-mate-1
```

Si el paquete no existe, recibirás un error como:
```
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/proyecto-mate-1 - Not found
```

### Iniciar sesión en NPM
Para publicar paquetes, primero debes iniciar sesión en tu cuenta de NPM:

```bash
npm adduser
```

Este comando te redigirá a crear una cuenta o iniciar sesión:
```
npm notice Log in on https://registry.npmjs.org/
Create your account at:
https://www.npmjs.com/login?next=/login/cli/[unique-id]
Press ENTER to open in the browser...

Logged in on https://registry.npmjs.org/.
```

**Nota**: El nombre del paquete en `package.json` debe ser único en todo NPM. Cambiamos de `intro-node-js` a `proyecto-mate-1` para evitar conflictos.

### Publicar el paquete
Una vez logueado y con un nombre único, publica tu paquete:

```bash
npm publish
```

**Error común de 2FA**: Si recibes este error:
```
npm error code E403
npm error 403 403 Forbidden - PUT https://registry.npmjs.org/proyecto-mate-1
npm error 403 Two-factor authentication or granular access token with bypass 2fa enabled is required to publish packages.
```

**Soluciones**:

1. **Habilitar 2FA en tu cuenta NPM** (Opción recomendada):
   - Ve a https://www.npmjs.com
   - Entra en tu cuenta
   - Ve a Account
   - Busca Two-Factor Authentication
   - Activa 2FA

2. **Crear token de acceso**:
   ```bash
   npm token create
   ```
   Luego publica con el token:
   ```bash
   npm publish --token <tu-token-aqui>
   ```

3. **Configurar token en .npmrc**:
   Crea un archivo `.npmrc` con:
   ```
   //registry.npmjs.org/:_authToken=<tu-token-aqui>
   ```

### Proceso de publicación exitoso con 2FA
Una vez activado 2FA, el proceso de publicación es:

```bash
npm publish
```

NPM mostrará el resumen del paquete y te pedirá autenticación:

```
npm notice
npm notice package: proyecto-mate-1@1.0.0
npm notice Tarball Contents
npm notice 169B .idea/encodings.xml
npm notice 277B .idea/modules.xml
npm notice 469B .idea/npm-basic.iml
npm notice 172B .idea/vcs.xml
npm notice 164.8kB assets/docs/NPM+-+Versionado+Semántico.pdf
npm notice 1.8kB index.js
npm notice 649B package.json
npm notice 264B prueba.js
npm notice 5.9kB readme.md
npm notice Tarball Details
npm notice name: proyecto-mate-1
npm notice version: 1.0.0
npm notice filename: proyecto-mate-1-1.0.0.tgz
npm notice package size: 152.8 kB
npm notice unpacked size: 174.5 kB
npm notice shasum: 8c59d16d8a06f3c8171dddfd13bd7d88bbc1f26e
npm notice integrity: sha512-ySL4RcCuM3Eet[...]o/j5R2Lkt2V5Q==
npm notice total files: 9
npm notice
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
Authenticate your account at:
https://www.npmjs.com/auth/cli/c5d583db-3d8e-42e0-82ce-2ccc5bfdeeb9
Press ENTER to open in the browser...

+ proyecto-mate-1@1.0.0
```

**Resultado**: `+ proyecto-mate-1@1.0.0` indica que la publicación fue exitosa.

## Versionado Semántico y Actualización de Paquetes

### Tipos de versionado con npm version
```bash
# Incrementar versión patch (1.0.0 → 1.0.1) - Correcciones de bugs
npm version patch

# Incrementar versión minor (1.0.0 → 1.1.0) - Nuevas funcionalidades
npm version minor

# Incrementar versión major (1.0.0 → 2.0.0) - Cambios que rompen compatibilidad
npm version major
```

### Proceso completo de actualización y publicación
1. **Actualizar versión**:
   ```bash
   npm version patch
   ```
   Salida: `v1.0.2`

2. **Subir cambios a Git**:
   ```bash
   git push
   ```

3. **Publicar nueva versión en NPM**:
   ```bash
   npm publish
   ```

4. **Subir tags al repositorio**:
   ```bash
   git push --tags
   ```

### Ejemplo de publicación de versión 1.1.0 (Última versión)
```bash
npm notice
npm notice package: proyecto-mate-1@1.1.0
npm notice Tarball Contents
npm notice 169B .idea/encodings.xml
npm notice 277B .idea/modules.xml
npm notice 469B .idea/npm-basic.iml
npm notice 172B .idea/vcs.xml
npm notice 164.8kB assets/docs/NPM+-+Versionado+Semántico.pdf
npm notice 1.8kB index_original.js
npm notice 4.3kB index.js
npm notice 649B package.json
npm notice 264B prueba.js
npm notice 4.1kB pruebas_completas.js
npm notice 9.2kB readme.md
npm notice name: proyecto-mate-1
npm notice version: 1.1.0
npm notice filename: proyecto-mate-1-1.1.0.tgz
npm notice package size: 155.5 kB
npm notice unpacked size: 186.2 kB
npm notice shasum: 0228587fd5f22f4068a8446051a1929b3a7a4e5c
npm notice integrity: sha512-dsZGn95mUFMy1[...]1hgnoY4ID+GtQ==
npm notice total files: 11
npm notice
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
Authenticate your account at:
https://www.npmjs.com/auth/cli/136515b2-4eed-4222-8b71-cdb4a48caf1c
Press ENTER to open in the browser...

+ proyecto-mate-1@1.1.0
```

**Resultado**: `+ proyecto-mate-1@1.1.0` indica que la nueva versión fue publicada exitosamente.

### Publicación disponible en:
- **NPM**: https://www.npmjs.com/package/proyecto-mate-1
- **GitHub**: https://github.com/Ferangular/npm-basic

### Verificar publicación
Verifica que tu paquete esté disponible en:
- **NPM**: https://www.npmjs.com/package/proyecto-mate-1
- **Terminal**: `npm view proyecto-mate-1`
- **Versión publicada**: v1.1.0 (con operaciones avanzadas)

## Versionado y Publicación en Git

### Crear y subir cambios al repositorio
```bash
git add .
git commit -m "feat/proyecto1_matematicas"
git push
```

### Crear etiquetas de versión
```bash
# Crear tag v1.0.0
git tag v1.0.0

# Subir tags al repositorio remoto
git push --tags
```

**Nota**: Si intentas crear un tag que ya existe, recibirás un error:
```
fatal: tag 'v1.0.0' already exists
```

### Verificar tags existentes
```bash
git tag
```

### Eliminar un tag localmente (si es necesario)
```bash
git tag -d v1.0.0
```

### Eliminar un tag del repositorio remoto
```bash
git push origin --delete v1.0.0
```

## Estructura del Proyecto
```
npm-basic/
├── index.js              # Archivo principal con funciones matemáticas mejoradas
├── index_original.js     # Versión original (backup)
├── package.json          # Configuración del paquete
├── README.md             # Documentación actualizada
├── prueba.js             # Archivo de pruebas básicas
├── pruebas_completas.js  # Pruebas exhaustivas de todas las funciones
└── assets/docs/          # Documentación adicional
```

---
*Proyecto 1 Matemáticas v1.1.0 - Librería educativa mejorada para aprender NodeJS y NPM*

## Mejoras Educativas Implementadas

### ✅ v1.1.0 - Mejoras Profesionales
- **Manejo de errores con `throw`**: Reemplazado `console.log()` por excepciones profesionales
- **Validación de división por cero**: Prevención del error matemático más común
- **JSDoc completo**: Documentación con `@returns` y `@throws`
- **Nuevas operaciones avanzadas**: `potencia()` y `raizCuadrada()`
- **Pruebas exhaustivas**: 100+ casos de prueba incluyendo errores y casos límite
- **Validación NaN**: Detección de valores no numéricos
- **Funciones de compatibilidad**: Mantenimiento de código antiguo con `@deprecated`

### 🎯 Objetivos Educativos
1. **Buenas prácticas**: Manejo profesional de errores
2. **Documentación**: JSDoc estándar de la industria
3. **Testing**: Pruebas exhaustivas y manejo de casos edge
4. **Versionado**: Semantic Versioning correcto
5. **Publicación**: Flujo completo de NPM
