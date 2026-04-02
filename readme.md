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
npm install proyecto-mate-1
```

## Uso
```javascript
const math = require('proyecto-mate-1');

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
> const m = require('proyecto-mate-1')
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
- **Nombre**: proyecto-mate-1
- **Versión**: 1.0.2
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

### Ejemplo de publicación de versión 1.0.2
```bash
npm notice
npm notice package: proyecto-mate-1@1.0.2
npm notice Tarball Contents
npm notice 169B .idea/encodings.xml
npm notice 277B .idea/modules.xml
npm notice 469B .idea/npm-basic.iml
npm notice 172B .idea/vcs.xml
npm notice 164.8kB assets/docs/NPM+-+Versionado+Semántico.pdf
npm notice 1.8kB index.js
npm notice 649B package.json
npm notice 264B prueba.js
npm notice 7.3kB readme.md
npm notice name: proyecto-mate-1
npm notice version: 1.0.2
npm notice filename: proyecto-mate-1-1.0.2.tgz
npm notice package size: 153.2 kB
npm notice unpacked size: 175.8 kB
npm notice shasum: f5bc41583bc44435e64d6879a9d97e5b3a8144a1
npm notice integrity: sha512-0zpIxbqXJJDB3[...]yo6b/sJpioz4w==
npm notice total files: 9
npm notice
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
Authenticate your account at:
https://www.npmjs.com/auth/cli/46a0bdb0-86b3-4268-bac6-87d9e2887391
Press ENTER to open in the browser...

+ proyecto-mate-1@1.0.2
```

**Resultado**: `+ proyecto-mate-1@1.0.2` indica que la nueva versión fue publicada exitosamente.

### Verificar publicación
Verifica que tu paquete esté disponible en:
- **NPM**: https://www.npmjs.com/package/proyecto-mate-1
- **Terminal**: `npm view proyecto-mate-1`

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
├── index.js              # Archivo principal con funciones matemáticas
├── package.json          # Configuración del paquete
├── README.md             # Documentación
└── prueba.js             # Archivo de pruebas
```

---
*Proyecto 1 Matemáticas - Librería básica para aprender NodeJS y NPM*
