const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

console.log(argv);

crearArchivo( argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo))
.catch( err => console.error(err));






// const [ , , arg3 = 'base=5'] = process.argv;   ESTO YA NO SE USA, SOLO PARA RECORDAR
// const [ , base= 5 ] = arg3.split ('=');
// console.log(base);

// console.log(process.argv);