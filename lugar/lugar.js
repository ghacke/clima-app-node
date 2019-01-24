const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    const key = 'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM';

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=${ key }`);

    if (resp.data.status !== 'OK') {
        throw new Error(`No hay resultados para la direccion: ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng,
}