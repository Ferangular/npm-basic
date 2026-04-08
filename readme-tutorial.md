# API OpenWeatherMap - Librería TypeScript

Librería TypeScript para acceder a la API de OpenWeatherMap y obtener información del clima.

## 🚀 Instalación para Usuarios

Instala el paquete desde el registro de NPM:

```bash
npm install api-openweathermap-practica
```

O con yarn:

```bash
yarn add api-openweathermap-practica
```

## ⚡ Uso Rápido

```javascript
import { ApiService } from 'api-openweathermap-practica';

// Crear instancia con tu API key
const api = new ApiService('TU_API_KEY');

// Obtener clima de una ciudad
const clima = await api.buscarPorNombre('Madrid', 'es');
console.log(`Temperatura: ${clima.main.temp}°C`);
console.log(`Descripción: ${clima.weather[0].description}`);
```

## 📋 Requisitos Previos

1. **API Key de OpenWeatherMap**: Obtén una gratuita en [openweathermap.org/api](https://openweathermap.org/api)
2. **Node.js**: Versión 14 o superior
3. **Proyecto TypeScript o JavaScript con ES modules**

## 🔧 Configuración

```javascript
import { ApiService } from 'api-openweathermap-practica';

// Crear instancia con tu API key
const api = new ApiService('TU_API_KEY');
```

## Métodos Disponibles

### 1. Buscar por Nombre de Ciudad

```javascript
const clima = await api.buscarPorNombre('Barcelona', 'es');
console.log(clima);
```

### 2. Buscar por Coordenadas Geográficas

```javascript
const clima = await api.buscarPorLocalizacionGeografica({
    lat: 40.4168,
    lon: -3.7038
});
console.log(clima);
```

### 3. Buscar por Código Postal

```javascript
const clima = await api.buscarPorZipCodigoPostal('08001', 'es');
console.log(clima);
```

## Ejemplo Completo

```javascript
import { ApiService } from './dist/index.js';

const APIKEY = '3ce5c4bc6efd0a54d73026582a893ff6';

async function probarApi() {
    console.log('=== Probando API OpenWeatherMap ===\n');
    
    const api = new ApiService(APIKEY);
    
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

probarApi();
```

## Respuesta de la API

La librería devuelve un objeto con la siguiente estructura:

```javascript
{
  "coord": { "lon": 2.159, "lat": 41.3888 },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "cielo claro",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 19.51,
    "feels_like": 18.46,
    "temp_min": 17.73,
    "temp_max": 21.21,
    "pressure": 1022,
    "humidity": 36
  },
  "wind": {
    "speed": 4.63,
    "deg": 80
  },
  "name": "Barcelona",
  "cod": 200
}
```

## Configuración Avanzada

### Idioma

Puedes configurar el idioma de las respuestas:

```javascript
const api = new ApiService('TU_API_KEY', 'en'); // Inglés
const api = new ApiService('TU_API_KEY', 'fr'); // Francés
```

### Unidades

Configura las unidades de temperatura:

```javascript
const api = new ApiService('TU_API_KEY', 'es', 'metric'); // Celsius (por defecto)
const api = new ApiService('TU_API_KEY', 'es', 'imperial'); // Fahrenheit
```

## Desarrollo

### Compilar el proyecto

```bash
npx tsc
```

### Modo observación

```bash
npm run watch
```

### Ejecutar pruebas

```bash
npm test
```

## Estructura del Proyecto

```
lib/
  index.ts              # Punto de entrada
  services/
    api.service.ts      # Servicio principal
  interfaces/
    api.interface.ts    # Tipos TypeScript
  constants/
    constants.ts        # URLs de la API
    lang-codes.ts       # Códigos de idioma
```

## Licencia

ISC

---

## 🌟 ¿Cómo los usuarios encuentran tu paquete?

### 1. Búsqueda en NPM
Los usuarios pueden buscar tu paquete en:
- **Sitio web**: [npmjs.com](https://www.npmjs.com) → Buscar "api-openweathermap-practica"
- **CLI**: `npm search api-openweathermap-practica`

### 2. Instalación directa
```bash
# Desde el sitio web de NPM
npm install api-openweathermap-practica

# Ver información del paquete
npm info api-openweathermap-practica

# Ver versión
npm view api-openweathermap-practica version
```

### 3. Ejemplo de proyecto completo
```javascript
// app.js - Aplicación de clima del usuario
import { ApiService } from 'api-openweathermap-practica';

class WeatherDashboard {
    constructor() {
        this.api = new ApiService(process.env.OPENWEATHER_API_KEY);
    }

    async displayWeather(city) {
        try {
            const weather = await this.api.buscarPorNombre(city, 'es');
            
            console.log(`🌤️  Clima en ${weather.name}`);
            console.log(`🌡️  Temperatura: ${weather.main.temp}°C`);
            console.log(`💧 Humedad: ${weather.main.humidity}%`);
            console.log(`🌬️  Viento: ${weather.wind.speed} m/s`);
            console.log(`☁️  ${weather.weather[0].description}`);
            
            return weather;
        } catch (error) {
            console.error('❌ Error:', error.message);
        }
    }
}

// Uso en aplicación real
const dashboard = new WeatherDashboard();
dashboard.displayWeather('Barcelona');
```

### 4. Integración en frameworks
```javascript
// React Example
import React, { useState, useEffect } from 'react';
import { ApiService } from 'api-openweathermap-practica';

function WeatherComponent({ city }) {
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        const api = new ApiService('your-api-key');
        api.buscarPorNombre(city).then(setWeather);
    }, [city]);
    
    return weather ? (
        <div>
            <h3>{weather.name}</h3>
            <p>{weather.main.temp}°C - {weather.weather[0].description}</p>
        </div>
    ) : 'Cargando...';
}
```

### 5. Documentación que verán los usuarios
Cuando publiquen, los usuarios verán en npmjs.com:
- 📖 **README completo** (este archivo)
- 📦 **Versión y tamaño**
- ⬇️ **Comandos de instalación**
- 📊 **Estadísticas de descarga**
- 🔗 **Dependencias**
- 📅 **Fecha de publicación**

### 6. Actualizaciones
```bash
# Usuarios verifican actualizaciones
npm outdated api-openweathermap-practica

# Actualizan a la última versión
npm update api-openweathermap-practica

# Instalan versión específica
npm install api-openweathermap-practica@1.1.0
```

---

## 📝 Para Desarrolladores (Tú)

### Publicar una nueva versión
```bash
# 1. Actualizar versión en package.json
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0

# 2. Publicar
npm publish

# 3. Los usuarios reciben la actualización con:
npm update api-openweathermap-practica
```