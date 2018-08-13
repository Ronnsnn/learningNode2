const axios = require('axios');
const lugar = require('./lugar/lugar');
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');


// lugar.getLugarLat(argv.direccion)
//     .then(async(resp) => {
//         console.log(`Clima de ${resp.direccion}:`);
//         return await clima.getClima(resp.lat, resp.lng);
//     }).then(resp => {
//         console.log(`${resp.main.temp}°`);
//     }).catch((err) => {
//         console.log('ERROR');
//     });

let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLat(direccion);
    let info = await clima.getClima(coors.lat, coors.lng);
    return {
        direccion: coors.direccion,
        infoClima: info.main
    };
}
getInfo(argv.direccion).then(resp => {
    console.log(`La temperatura actual de ${resp.direccion} es de ${resp.infoClima.temp}° con una humedad del ${resp.infoClima.humidity}%. La mínima de hoy es de ${resp.infoClima.temp_min} y la máxima es de ${resp.infoClima.temp_max}°.`);
}).catch(err => { console.log(err); })