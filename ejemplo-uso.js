import { ApiService } from './dist/index.js';

// La API key se carga automáticamente desde .env
// No necesitas pasarla manualmente
async function probarApi() {
    console.log('=== Probando API OpenWeatherMap (con .env) ===\n');
    
    // Crear instancia sin API key (la tomará del entorno)
    const api = new ApiService();
    
    try {
        // 1. Buscar por nombre de ciudad
        console.log('1. Buscando clima por nombre (Barcelona, España)...');
        const climaBarcelona = await api.buscarPorNombre('Barcelona', 'es');
        console.log('Temperatura:', climaBarcelona.main.temp, '°C');
        console.log('Descripción:', climaBarcelona.weather[0].description);
        console.log('\n');
        
        // 2. Buscar por coordenadas
        console.log('2. Buscando clima por coordenadas (Madrid)...');
        const climaMadrid = await api.buscarPorLocalizacionGeografica({
            lat: 40.4168,
            lon: -3.7038
        });
        console.log('Temperatura:', climaMadrid.main.temp, '°C');
        console.log('Descripción:', climaMadrid.weather[0].description);
        console.log('\n');
        
        // 3. Buscar por código postal
        console.log('3. Buscando clima por código postal (08001, Barcelona)...');
        const climaCP = await api.buscarPorZipCodigoPostal('08001', 'es');
        console.log('Temperatura:', climaCP.main.temp, '°C');
        console.log('Descripción:', climaCP.weather[0].description);
        console.log('\n');
        
    } catch (error) {
        console.error('Error al consultar la API:', error.message);
    }
}

// Ejecutar la prueba
probarApi();
