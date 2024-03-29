const request = require('request')
//const chalk = require('chalk')


const geocode = (address, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZGhheWFuZXNoIiwiYSI6ImNrZ2o3MjZpYzJodjMycnFhMHh0MHltY2sifQ.HRH7v3oAUs9tIMU-stUrfw&limit=1'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Error getting data!", undefined)
        } else if (body.features.length === 0) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode