const axios = require('axios');
const apiKey = require('../consts/apiKeys').WHEATER_KEY;

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${apiKey}`);
    if (resp.status === 200) {
        return resp.data;
    }
    throw new Error('No hay datos de clima');

}
module.exports = {
    getClima,
}