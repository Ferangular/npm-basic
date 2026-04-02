const obtenerUsuario = require('../index').obtenerDatosDeUsuario;

const expect = require('chai').expect;

var nock = require('nock');

const mugan86 = require('./respuestas/mugan86');
const ferangular = require('./respuestas/Ferangular');

describe('Test de datos de diferentes usuarios de Github', () => {
    
    // Test para usuario mugan86
    describe('Usuario mugan86', () => {
        beforeEach(() => {
            nock('https://api.github.com')
                .get('/users/mugan86')
                .reply(200, mugan86);
        });
        
        it('Obtener datos del usuario "mugan86"', () => {
            return obtenerUsuario('mugan86').then(
                respuesta => {
                    // Probar el tipo de variable que obtenemos de respuesta. Tiene que ser un objeto.
                    expect(typeof respuesta).to.equal('object');

                    // Comprobar que el usuario de la API es mugan86
                    expect(respuesta.login).to.equal('mugan86');
                    // Comprobar que el ID del usuario es numérico
                    expect(typeof respuesta.id).to.equal('number');
                    // Seguidores y seguidos sean numéricos
                    expect(typeof respuesta.followers).to.equal('number');
                    expect(typeof respuesta.following).to.equal('number');
                    // Location = Soraluze (Basque Country) (EU)
                    expect(respuesta.location).to.equal('Soraluze (Basque Country) (EU)');
                }
            )
        });
    });
    
    // Tests para usuario Ferangular
    describe('Usuario Ferangular', () => {
        beforeEach(() => {
            nock('https://api.github.com')
                .get('/users/Ferangular')
                .reply(200, ferangular);
        });
        
        it('Obtener datos del usuario "Ferangular"', () => {
            return obtenerUsuario('Ferangular').then(
                respuesta => {
                    // Verificar que recibimos un objeto
                    expect(typeof respuesta).to.equal('object');
                    
                    // Verificar datos del usuario Ferangular
                    expect(respuesta.login).to.equal('Ferangular');
                    expect(respuesta.name).to.equal('Fer');
                    expect(respuesta.id).to.be.a('number');
                    expect(respuesta.public_repos).to.equal(33);
                    expect(respuesta.followers).to.equal(0);
                    expect(respuesta.following).to.equal(0);
                    
                    // Verificar URLs
                    expect(respuesta.html_url).to.include('github.com/Ferangular');
                    expect(respuesta.avatar_url).to.include('avatars.githubusercontent.com');
                    
                    // Verificar fechas
                    expect(respuesta.created_at).to.be.a('string');
                    expect(respuesta.updated_at).to.be.a('string');
                }
            )
        });
        
        it('Manejar usuario no existente', () => {
            nock('https://api.github.com')
                .get('/users/usuarioquenexiste12345')
                .reply(404, { message: 'Not Found' });
                
            return obtenerUsuario('usuarioquenexiste12345').then(
                respuesta => {
                    // Debería recibir un objeto con mensaje de error
                    expect(respuesta).to.have.property('message');
                    expect(respuesta.message).to.include('Not Found');
                }
            )
        });
        
        it('Validar estructura de respuesta completa', () => {
            return obtenerUsuario('Ferangular').then(
                respuesta => {
                    // Campos obligatorios que deben existir
                    const camposRequeridos = [
                        'login', 'id', 'avatar_url', 'url', 'html_url',
                        'type', 'name', 'company', 'blog', 'location',
                        'email', 'hireable', 'bio', 'twitter_username',
                        'public_repos', 'public_gists', 'followers', 'following',
                        'created_at', 'updated_at'
                    ];
                    
                    camposRequeridos.forEach(campo => {
                        expect(respuesta).to.have.property(campo);
                    });
                }
            )
        });
    });
});
