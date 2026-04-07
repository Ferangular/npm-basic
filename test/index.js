const log = require('./../index-corrected');

const { expect } = require('chai');
const sinon = require('sinon');

const MENSAJE = 'Hola, estamos en el curso de NPM!!';

describe('Test de las funciones', () => {
    beforeEach( function() {
        sinon.spy(console, 'log');
    });
    afterEach( function() {
        console.log.restore();
    });
    
    it('Función ok', () => {
        log.ok(MENSAJE);
        expect(console.log.called).to.be.true;
    });
    
    it('Función info', () => {
        log.info(MENSAJE);
        expect(console.log.called).to.be.true;
    });
    
    it('Función aviso', () => {
        log.aviso(MENSAJE);
        expect(console.log.called).to.be.true;
    });
    
    it('Función error', () => {
        log.error(MENSAJE);
        expect(console.log.called).to.be.true;
    });

    it('No llama al console log', () => {
        log.mensajeBienvenida();
        expect(console.log.called).to.be.false;
    });
});
