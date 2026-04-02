var expect = require('chai').expect;

describe('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // Una prueba
    it ('Los valores del array son iguales', () => {
        const resultado = [1, 2, 4, 6, 8];
        expect(String(array)).to.equal('1,2,4,6,8');
        expect(array).to.eql(resultado);
        expect(array).to.deep.equal(resultado);
        expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
    });

    it('Contiene el valor "2" el array', () => {
        expect(String(array).indexOf('2,') > -1).to.equal(true);
        expect(array).to.include(2);
        expect(array).to.be.an('array').that.includes(2);
        expect([1, 2]).to.include(2).not.to.include(56);
        

    });
    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        // [1, 2, 4, 6, 8]
        expect(array).to.include.members([1,1,1,4]);
        expect(array).to.include.members([1, 2, 4, 6, 8, 1, 2, 4, 6, 8]);
    });
    it('Contiene los valores independientemente del orden', () => {
        expect(array).to.have.members([8, 1, 2, 4, 6]);
        expect(array).to.have.members([8, 1, 2, 6, 4]);
        expect(array).to.have.members([8, 2, 1, 4, 6]);
        expect(array).to.have.members([8, 1, 4, 2, 6]);
        expect(array).to.have.members([6, 1, 4, 2, 8]);

    });
    it('Tiene una longitud de 5 carácteres', () => {
        expect(array).to.have.lengthOf(5);
        expect(array.length).to.equal(5);
    });
});
