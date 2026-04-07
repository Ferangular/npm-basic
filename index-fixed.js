module.exports = {
    ok,
    info,
    error,
    aviso,
    mensajeBienvenida
};

function ok(mensaje) {
    const color = '\x1b[42m\x1b[37m'; // fondo verde, texto blanco
    const reset = '\x1b[0m';
    mostrarLog(mensaje, color, reset);
}

function info(mensaje) {
    const color = '\x1b[44m\x1b[37m'; // fondo azul, texto blanco
    const reset = '\x1b[0m';
    mostrarLog(mensaje, color, reset);
}

function error(mensaje) {
    const color = '\x1b[41m\x1b[37m'; // fondo rojo, texto blanco
    const reset = '\x1b[0m';
    mostrarLog(mensaje, color, reset);
}

function aviso(mensaje) {
    const color = '\x1b[43m\x1b[37m'; // fondo amarillo, texto blanco
    const reset = '\x1b[0m';
    mostrarLog(mensaje, color, reset);
}

function mostrarLog(mensaje, color, reset) {
    console.log(`${color}${mensaje}${reset}`);
}

function mensajeBienvenida() {
    return 'Hola!!!';
}
