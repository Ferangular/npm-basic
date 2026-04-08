import dotenv from 'dotenv';
// Cargar variables de entorno desde .env
dotenv.config();
// Exportar las variables de entorno
export const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY || '';
export const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE || 'es';
export const DEFAULT_UNITS = process.env.DEFAULT_UNITS || 'metric';
//# sourceMappingURL=env.js.map