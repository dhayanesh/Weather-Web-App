const request = require('request')
//const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url ='http://api.weatherstack.com/current?access_key=d9469e51afc942ac7d44155443cf933f&query=' + longitude + ',' + latitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Error getting data!", undefined)
        } else if (body.error) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+". Currently the temperature is " +body.current.temperature+". It feels like "+ body.current.feelslike)
        }
    })
}

module.exports = forecast