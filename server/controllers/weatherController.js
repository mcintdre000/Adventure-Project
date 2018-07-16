const axios = require('axios');
const API = process.env.WEATHER_API_KEY

module.exports = {
    getWeather: (req, res) => {
        let { lat, lon } = req.params;
        axios.get(`https://api.darksky.net/forecast/${API}/${lat},${lon}`)
        .then( response => {
            res.status(200).send(response.data)
        })
    },
}