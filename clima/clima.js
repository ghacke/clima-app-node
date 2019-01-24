const axios = require('axios');

const getClima = async(lat, lng) => {

    const key = '6f454e3eafb208d3f4601922fc1bb0c3';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ key }`

    let resp = await axios.get(url);

    if (resp.data.cod !== 200) {
        throw new Error(`Error al obtener el clima. `);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}