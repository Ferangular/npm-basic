/**
 * Saludos Plus - Librería Educativa de Saludos
 * Una librería simple para aprender a crear y publicar paquetes npm
 * 
 * @author Fer
 * @version 1.0.0
 * @description Ejemplo educativo para curso de npm
 */

class SaludosPlus {
    /**
     * Saludo básico - Hola Mundo!!!
     * @returns {string} - Mensaje de saludo
     */
    static hola() {
        console.log('Hola Mundo!!!');
        return 'Hola Mundo!!!';
    }

    /**
     * Saludo personalizado con nombre
     * @param {string} nombre - Nombre de la persona a saludar
     * @returns {string} - Mensaje de saludo personalizado
     */
    static holaPersonalizado(nombre) {
        if (!nombre || typeof nombre !== 'string') {
            console.log('Por favor, proporciona un nombre válido');
            return 'Por favor, proporciona un nombre válido';
        }
        const mensaje = `Hola ${nombre.trim()}`;
        console.log(mensaje);
        return mensaje;
    }

    /**
     * Saludo especial para el curso NPM
     * @returns {string} - Mensaje de bienvenida al curso
     */
    static holaAlCursoNPM() {
        const mensaje = '🎉 ¡Hola al curso NPM!!! 🚀';
        console.log(mensaje);
        return mensaje;
    }

    /**
     * Saludo en diferentes idiomas
     * @param {string} idioma - Código del idioma (es, en, fr, it, pt, de)
     * @returns {string} - Saludo en el idioma especificado
     */
    static holaEnIdioma(idioma = 'es') {
        const saludos = {
            es: '¡Hola!',
            en: 'Hello!',
            fr: 'Bonjour!',
            it: 'Ciao!',
            pt: 'Olá!',
            de: 'Hallo!',
            jp: 'こんにちは!',
            zh: '你好!'
        };
        
        const mensaje = saludos[idioma.toLowerCase()] || saludos.es;
        console.log(mensaje);
        return mensaje;
    }

    /**
     * Saludo con hora del día
     * @param {string} nombre - Nombre de la persona (opcional)
     * @returns {string} - Saludo según la hora actual
     */
    static holaConHora(nombre = '') {
        const hora = new Date().getHours();
        let saludo;
        
        if (hora >= 6 && hora < 12) {
            saludo = 'Buenos días';
        } else if (hora >= 12 && hora < 18) {
            saludo = 'Buenas tardes';
        } else {
            saludo = 'Buenas noches';
        }
        
        const mensaje = nombre ? `${saludo}, ${nombre}!` : `${saludo}!`;
        console.log(mensaje);
        return mensaje;
    }

    /**
     * Saludo múltiple para varias personas
     * @param {Array} nombres - Array de nombres a saludar
     * @returns {Array} - Array de mensajes de saludo
     */
    static holaMultiple(nombres) {
        if (!Array.isArray(nombres)) {
            console.log('Por favor, proporciona un array de nombres');
            return [];
        }
        
        const mensajes = nombres.map(nombre => {
            const mensaje = `Hola ${nombre}`;
            console.log(mensaje);
            return mensaje;
        });
        
        return mensajes;
    }

    /**
     * Saludo formal o informal
     * @param {string} nombre - Nombre de la persona
     * @param {boolean} esFormal - true para formal, false para informal
     * @returns {string} - Saludo formal o informal
     */
    static holaFormal(nombre, esFormal = true) {
        if (!nombre) {
            console.log('Por favor, proporciona un nombre');
            return 'Por favor, proporciona un nombre';
        }
        
        const mensaje = esFormal 
            ? `Estimado/a ${nombre}, es un placer saludarle`
            : `¡Qué tal ${nombre}!`;
            
        console.log(mensaje);
        return mensaje;
    }

    /**
     * Obtiene información sobre la librería
     * @returns {object} - Información del paquete
     */
    static getInfo() {
        const info = {
            name: 'saludos-plus',
            version: '1.0.0',
            description: 'Librería educativa de saludos para aprender npm',
            author: 'Fer',
            methods: Object.getOwnPropertyNames(this).filter(method => 
                method !== 'length' && method !== 'name' && method !== 'prototype'
            )
        };
        
        console.log('📦 Información de la librería:');
        console.log(JSON.stringify(info, null, 2));
        return info;
    }
}

// Exportamos la clase para que pueda ser usada como módulo
module.exports = SaludosPlus;
