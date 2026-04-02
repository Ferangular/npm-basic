const expect = require('chai').expect;
const math = require('../index');

describe('Math Operations', function() {
    describe('suma()', function() {
        it('should return sum of two positive numbers', function() {
            expect(math.suma(2, 3)).to.equal(5);
            expect(math.suma(0, 0)).to.equal(0);
            expect(math.suma(100, 200)).to.equal(300);
        });

        it('should handle negative numbers', function() {
            expect(math.suma(-5, 10)).to.equal(5);
            expect(math.suma(-3, -7)).to.equal(-10);
        });

        it('should handle decimal numbers', function() {
            expect(math.suma(3.5, 2.5)).to.equal(6);
            expect(math.suma(1.1, 2.2)).to.be.closeTo(3.3, 0.001);
        });

        it('should throw TypeError for non-numeric inputs', function() {
            expect(() => math.suma('hello', 5)).to.throw(TypeError, 'Ambos parámetros deben ser números');
            expect(() => math.suma(true, 2)).to.throw(TypeError);
            expect(() => math.suma(null, 3)).to.throw(TypeError);
            expect(() => math.suma(undefined, 1)).to.throw(TypeError);
        });

        it('should throw TypeError for NaN inputs', function() {
            expect(() => math.suma(NaN, 5)).to.throw(TypeError, 'Ambos parámetros deben ser números válidos (no NaN)');
        });
    });

    describe('resta()', function() {
        it('should return difference of two numbers', function() {
            expect(math.resta(10, 3)).to.equal(7);
            expect(math.resta(5, 10)).to.equal(-5);
            expect(math.resta(0, 0)).to.equal(0);
        });

        it('should handle negative numbers', function() {
            expect(math.resta(-5, -3)).to.equal(-2);
            expect(math.resta(-3, 5)).to.equal(-8);
        });

        it('should throw TypeError for non-numeric inputs', function() {
            expect(() => math.resta('hello', 5)).to.throw(TypeError);
            expect(() => math.resta(5, 'world')).to.throw(TypeError);
        });
    });

    describe('multiplicacion()', function() {
        it('should return product of two numbers', function() {
            expect(math.multiplicacion(3, 4)).to.equal(12);
            expect(math.multiplicacion(0, 5)).to.equal(0);
            expect(math.multiplicacion(-2, 5)).to.equal(-10);
        });

        it('should handle decimal numbers', function() {
            expect(math.multiplicacion(2.5, 4)).to.equal(10);
            expect(math.multiplicacion(1.5, 2.5)).to.be.closeTo(3.75, 0.001);
        });

        it('should throw TypeError for non-numeric inputs', function() {
            expect(() => math.multiplicacion('hello', 5)).to.throw(TypeError);
            expect(() => math.multiplicacion(5, 'world')).to.throw(TypeError);
        });
    });

    describe('division()', function() {
        it('should return quotient of two numbers', function() {
            expect(math.division(10, 2)).to.equal(5);
            expect(math.division(7, 2)).to.equal(3.5);
            expect(math.division(-6, 2)).to.equal(-3);
        });

        it('should handle decimal results', function() {
            expect(math.division(1, 3)).to.be.closeTo(0.333, 0.001);
        });

        it('should throw Error for division by zero', function() {
            expect(() => math.division(10, 0)).to.throw('No se puede dividir por cero');
            expect(() => math.division(0, 0)).to.throw('No se puede dividir por cero');
        });

        it('should throw TypeError for non-numeric inputs', function() {
            expect(() => math.division('hello', 5)).to.throw(TypeError);
            expect(() => math.division(10, 'world')).to.throw(TypeError);
        });
    });

    describe('potencia()', function() {
        it('should calculate power correctly', function() {
            expect(math.potencia(2, 3)).to.equal(8);
            expect(math.potencia(5, 2)).to.equal(25);
            expect(math.potencia(3, 0)).to.equal(1);
        });

        it('should handle negative bases', function() {
            expect(math.potencia(-2, 3)).to.equal(-8);
            expect(math.potencia(-3, 2)).to.equal(9);
        });

        it('should handle fractional exponents', function() {
            expect(math.potencia(4, 0.5)).to.equal(2);
            expect(math.potencia(9, 0.5)).to.equal(3);
        });

        it('should throw TypeError for non-numeric inputs', function() {
            expect(() => math.potencia('hello', 5)).to.throw(TypeError);
            expect(() => math.potencia(2, 'world')).to.throw(TypeError);
        });
    });

    describe('raizCuadrada()', function() {
        it('should calculate square root correctly', function() {
            expect(math.raizCuadrada(9)).to.equal(3);
            expect(math.raizCuadrada(16)).to.equal(4);
            expect(math.raizCuadrada(0)).to.equal(0);
        });

        it('should handle decimal results', function() {
            expect(math.raizCuadrada(2.25)).to.equal(1.5);
            expect(math.raizCuadrada(2)).to.be.closeTo(1.414, 0.001);
        });

        it('should throw Error for negative numbers', function() {
            expect(() => math.raizCuadrada(-9)).to.throw('No se puede calcular la raíz cuadrada de un número negativo');
            expect(() => math.raizCuadrada(-1)).to.throw('No se puede calcular la raíz cuadrada de un número negativo');
        });

        it('should throw TypeError for non-numeric input', function() {
            expect(() => math.raizCuadrada('hello')).to.throw(TypeError);
            expect(() => math.raizCuadrada(null)).to.throw(TypeError);
        });
    });
});
