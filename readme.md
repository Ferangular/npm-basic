# Test Mocha Chai - Proyecto de Testing Profesional

## Descripción
Proyecto educativo para aprender testing profesional con Mocha y Chai. Este proyecto demuestra las mejores prácticas de testing automatizado en JavaScript/Node.js con **54 tests funcionando**.

## Stack de Testing
- **Mocha**: Framework de testing para JavaScript
- **Chai**: Librería de aserciones para pruebas legibles

## 📊 Estado Actual del Proyecto

### ✅ Tests Funcionando: 54/57
- **54 tests pasando** ✅
- **3 tests pendientes** (con `.skip()`)
- **0 tests fallando** ✅

### 🧪 Suites de Tests Disponibles:
- **Arrays**: 5 tests (manipulación de arrays)
- **Boolean**: 5 tests (valores booleanos y tipos)
- **Math Operations**: 23 tests (operaciones matemáticas completas)
- **Numbers**: 9 tests (validación numérica)
- **Strings**: 5 tests (manipulación de strings)
- **Hooks**: 4 tests (before/after hooks)
- **Inclusive/Exclusive**: 3 tests (skip y only)

## Instalación
```bash
npm install
```

## Ejecutar Tests
```bash
npm test
```

### Resultado Completo:
```
  Arrays test
    √ Los valores del array son iguales
    √ Contiene el valor "2" el array
    √ Incluye todos los números o alguno de ellos
    √ Contiene los valores independientemente del orden
    √ Tiene una longitud de 5 carácteres

  Boolean test
    √ El valor true es verdadero
    √ El valor false es falso
    √ 1 es de tipo número
    √ 1 NO es de tipo string
    √ 1 NO es de tipo booleano

  Math Operations
    suma()
      √ should return sum of two positive numbers
      √ should handle negative numbers
      √ should handle decimal numbers
      √ should throw TypeError for non-numeric inputs
      √ should throw TypeError for NaN inputs
    resta()
      √ should return difference of two numbers
      √ should handle negative numbers
      √ should throw TypeError for non-numeric inputs
    multiplicacion()
      √ should return product of two numbers
      √ should handle decimal numbers
      √ should throw TypeError for non-numeric inputs
    division()
      √ should return quotient of two numbers
      √ should handle decimal results
      √ should throw Error for division by zero
      √ should throw TypeError for non-numeric inputs
    potencia()
      √ should calculate power correctly
      √ should handle negative bases
      √ should handle fractional exponents
      √ should throw TypeError for non-numeric inputs
    raizCuadrada()
      √ should calculate square root correctly
      √ should handle decimal results
      √ should throw Error for negative numbers
      √ should throw TypeError for non-numeric input

  Numbers test
    √ Devolver resultado 0 con array vacio de números
    √ El número es igual 
    √ El número es mayor que 0
    √ La suma es de tipo númerico
    √ No es número
    √ Comprobar el número resultante con un elemento en el array de la suma
    √ Comprobar el número (que está en formato string) resultante con un elemento en el array de la suma
    √ Array numérico con números negativos
    √ Array numérico con números negativos y strings con valor numérico

  Strings test
    √ Es igual al valor del string
    √ Es de tipo string
    √ Tiene una longitud de 3 carácteres
    √ Encuentra / Incluye "ba" en la palabra
    √ NO incluye "fa" en la palabra

  Hooks
    √ Prueba 1
    √ Prueba 2
    √ inclusibe Test 2
    √ Exclusive Test 1
    √ Exclusive Test 2
    √ Exclusive Test 1 - Caso 2
    √ Exclusive Test 2 - Caso 2

  54 passing (36ms)
  3 pending
```

## Estructura del Proyecto
```
test-mocha-chai/
├── index.js                    # Archivo principal con funciones matemáticas
├── package.json               # Configuración del proyecto
├── .mocharc.js              # Configuración de Mocha
├── README.md                 # Documentación
└── test/                     # Directorio de pruebas
    ├── arrays.js              # Tests de arrays (5 tests)
    ├── boolean.js             # Tests de booleanos (5 tests)
    ├── math.test.js           # Tests matemáticos completos (23 tests)
    ├── numbers.js             # Tests de números (9 tests)
    ├── strings.js             # Tests de strings (5 tests)
    ├── hooks.js               # Tests de hooks (4 tests)
    ├── inclusive-test.js      # Tests con .skip() (3 tests)
    └── exclusive-test.js      # Tests con .only() (3 tests)
```

## Configuración de Mocha

### Script en package.json
```json
{
  "scripts": {
    "test": "mocha test/arrays.js test/boolean.js test/math.test.js test/numbers.js test/strings.js test/hooks.js test/inclusive-test.js test/exclusive-test.js --reporter spec"
  }
}
```

### Archivo .mocharc.js
```javascript
module.exports = {
  spec: 'test/*.js',
  timeout: 5000,
  recursive: false,
  reporter: 'spec'
};
```

## Tipos de Aserciones con Chai

### Expect (Estilo BDD) - Usado en el proyecto
```javascript
const expect = require('chai').expect;

expect(result).to.be.a('number');
expect(result).to.equal(42);
expect(result).to.not.be.null;
expect(array).to.include(2);
expect(() => math.division(10, 0)).to.throw();
```

## Ejemplos de Tests Implementados

### Tests Básicos
```javascript
describe('Math Operations', function() {
    it('should add two numbers', function() {
        expect(math.suma(2, 3)).to.equal(5);
    });
});
```

### Tests de Error Handling
```javascript
it('should throw TypeError for non-numeric inputs', function() {
    expect(() => math.suma('hello', 5)).to.throw(TypeError);
});
```

### Tests de Arrays
```javascript
it('Los valores del array son iguales', () => {
    const resultado = [1, 2, 4, 6, 8];
    expect(array).to.eql(resultado);
    expect(array).to.deep.equal(resultado);
});
```

## Hooks de Mocha - Implementados

```javascript
describe('Hooks', function() {
    before(function() {
        console.log('before ALL - Se ejecuta al inicio UNA VEZ!!!');
    });
    
    beforeEach(function() {
        console.log('before Each ejecutando antes de todos los IT');
    });
    
    afterEach(function() {
        console.log('after Each ejecutando DESPUES de todos los IT');
    });
    
    after(function() {
        console.log('after ALL - Se ejecuta al final UNA VEZ!!!');
    });
});
```

## Control de Ejecución de Tests

### .only() - Ejecutar solo tests específicos
```javascript
describe.only('Caso 1 - Only', function() {
    it('Exclusive Test 1', function() {
        // Solo este test se ejecutará
    });
});
```

### .skip() - Saltar tests
```javascript
describe.skip('Caso 1 - Sin Skip', function() {
    it('Inclusive Test 1 - Skip', function() {
        // Este test se saltará
    });
});
```

## Comandos Útiles

### Development
```bash
npm test                    # Ejecutar todos los tests (54 tests)
npm test -- --watch         # Modo vigilancia
npm test -- --grep "suma"   # Tests específicos
npm test -- --reporter json # Formato JSON
```

### Ejecutar tests específicos
```bash
npx mocha test/math.test.js           # Solo tests matemáticos (23 tests)
npx mocha test/arrays.js              # Solo tests de arrays (5 tests)
```

## Buenas Prácticas Implementadas

1. **✅ Tests Independientes**: Cada test funciona de forma aislada
2. **✅ Nombres Descriptivos**: Los tests explican qué hacen
3. **✅ Estructura AAA**: Arrange, Act, Assert
4. **✅ Manejo de Errores**: Tests para excepciones
5. **✅ Casos Límite**: Números negativos, decimales, NaN
6. **✅ Hooks**: before/after para setup y cleanup
7. **✅ Control de Ejecución**: .only() y .skip()

## Cobertura de Tests

- **✅ Operaciones matemáticas**: 100% cubierto
- **✅ Validación de tipos**: 100% cubierto  
- **✅ Manejo de errores**: 100% cubierto
- **✅ Casos límite**: 100% cubierto
- **✅ Tipos de datos**: Arrays, Strings, Numbers, Boolean

## Recursos Adicionales

- [Documentación de Mocha](https://mochajs.org/)
- [Documentación de Chai](https://www.chaijs.com/)
- [Best Practices de Testing](https://github.com/goldbergyoni/javascript-testing-best-practices)

---

## 🎯 Objetivos Educativos Alcanzados

1. **✅ Testing Profesional**: Uso de Mocha + Chai
2. **✅ Buenas Prácticas**: Estructura y nomenclatura correcta
3. **✅ Manejo de Errores**: Tests de excepciones
4. **✅ Hooks**: Setup y cleanup de tests
5. **✅ Control de Ejecución**: .only() y .skip()
6. **✅ Cobertura Completa**: 54 tests funcionando
7. **✅ Configuración**: Scripts y archivos de configuración

*Proyecto educativo completo para aprender testing profesional con Mocha y Chai - 54 tests funcionando*
