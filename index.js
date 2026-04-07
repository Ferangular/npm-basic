

const shelljs = require('shelljs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

const ficheroOK = (filepath) => {
    console.log(
        chalk.white.bgGreen.bold(
            `¡Muy bien! Fichero correctamente creado en el directorio ${filepath}`
        )
    );
};
const crearFichero = (nombreFichero, extension) => {
    const pathFichero = `${process.cwd()}/${nombreFichero}.${extension}`;
    shelljs.touch(pathFichero);
    return pathFichero;
};

const hacerPreguntas = () => {
    const preguntas = [
        {
            name: 'FICHERO',
            type: 'input',
            message: '¿Cómo se va a llamar tu fichero? (sin la extensión)',
        },
        {
            name: 'EXTENSION',
            type: 'list',
            message: '¿Qué extensión tiene tu fichero?',
            choices: ['.rb', '.js', '.kt', '.java', '.ts', '.php'],
            filter: function (val) {
                return val.split('.')[1];
            },
        },
    ];

    return inquirer.prompt(preguntas);
};

const iniciar = () => {
    console.log(
        chalk.green(
            figlet.textSync('Creador Ficheros', {
                font: 'Bubble',
                horizontalLayout: 'default',
                verticalLayout: 'default',
            })
        )
    );
};

const ejecutar = async () => {
    // Mostrar la información de la librería en la cabecera, el título con figlet
    iniciar();
    // Preguntas necesarias para crear el fichero, es decir, el nombre y la extensión
    const respuestas = await hacerPreguntas();
    const { FICHERO, EXTENSION } = respuestas;
    console.log(respuestas);
    // Creamos el fichero
    const pathFichero = crearFichero(FICHERO, EXTENSION);
    // Añadimos mensaje que fichero se ha creado correctamente
    ficheroOK(pathFichero);
};


ejecutar();