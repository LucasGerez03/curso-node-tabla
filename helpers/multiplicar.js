
const fs = require('fs');
var colors = require('colors/safe')
var colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i}` + ' = ' +`${base * i}\n`;
            consola += `${base} x ${i}`.bold.italic.cyan + ' = '.bold.italic.white +`${base * i}\n`.bold.red;
        }

        if (listar) {
            console.log("=======================".strikethrough.green);
            console.log(`Tabla del número`.bold.green, base);
            console.log("=======================".strikethrough.green);

            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (colors.rainbow(`tabla-${base}.txt creada`));
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo: crearArchivo
}