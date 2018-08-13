const axios = require('axios');

const getLugarLat = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }`);
    if (resp.data.status === 'OK') {
        let loc = resp.data.results[0];
        let coors = loc.geometry.location;
        return {
            direccion: loc.formatted_address,
            lat: coors.lat,
            lng: coors.lng
        }
    }
    throw new Error('No hay datos de locación');
}

module.exports = {
    getLugarLat,
}