
describe('Hooks', () => {
    before(() => console.log(' before ALL - Se ejecuta al inicio UNA VEZ!!!'));
    after(() => console.log(' after ALL - Se ejecuta al final de todas las pruebas ("it") UNA VEZ!!!'));
    beforeEach(() => console.log('before Each ejecutando antes de todos los IT'));
    afterEach(() => console.log('after Each ejecutando DESPUES de todos los IT'));
    it('Prueba 1', () => console.log('TEST 1'));
    it('Prueba 2', () => console.log('TEST 2'));
});