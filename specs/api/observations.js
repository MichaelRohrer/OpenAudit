var observations = require("./support/observations.js");
var chai = require("chai");
chai.should();
chai.use(require('chai-things'));

describe("The /observations endpoint", function () {
    it("should allow a sensor to post observations made in the field", itShouldAllowASensorToPostObservationsMadeInTheField);
});

function itShouldAllowASensorToPostObservationsMadeInTheField() {
    var payload = observations.generateObservation();
    return observations.sendObservation(payload)
        .then(function(response) {
            response.status.should.equal(201);
            return response;
        });    
}

