const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad',
        demand: true,
    }
}).argv;

module.exports = {
    argv,
}