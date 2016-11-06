var config = require("../../../config/config.js");
var apiPrefix = config.apiUrl;
var api = require("supertest-as-promised")(apiPrefix);
var Chance = require("chance");
var chance = new Chance();

function sendObservation(observation) {
    return api
        .post('/observations')
        .set('Content-Type', 'application/json')
        .send(observation)
        .then(function(response) {
            return response;
        });
}

function generateObservation() {
    return {
        coordinates: [chance.latitude({min: 46.747864, max: 46.846108}), chance.longitude({min:6.399836, max: 6.706251})],
        timestamp: new Date().toISOString(),
        data: {
            sciName: "Pava Cristatus"
        }
    }
}

module.exports = {
    generateObservation: generateObservation,
    sendObservation: sendObservation
}

