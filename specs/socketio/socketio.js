var config = require("../../config/config.js");
var socketIoUrl = config.socketIoUrl;

var observations = require("../api/support/observations.js");
var io = require('socket.io-client');

var chai = require("chai");
chai.should();

describe("The socket.io server", function () {
    this.timeout(3000);
    it("should accept a client connection", itShouldAcceptAClientConnection);
    it("should broadcast a message when it accepts a new client connection", itShouldBroadcastAMessageWhenItAcceptsANewClientConnection);
    it("should forward observations received on the REST API", itShouldForwardObservationsReceivedOnTheRESTAPI);
    it("should forward observations received on the REST API to ALL clients", itShouldForwardObservationsReceivedOnTheRESTAPIToALLClients);
});

function itShouldAcceptAClientConnection() {
    var options = {
        timeout: 2000
    };

    var client = io.connect(socketIoUrl, options);

    var deferred = Promise.defer();
    client.on('connect', function(data) {
        //deferred.resolve(data);
    });

    client.on('msg_welcome', function(msg) {
        deferred.resolve(msg);
    });

    client.on('connect_error', function(error) {
        deferred.reject(error);
    });

    return deferred.promise;

}

function itShouldBroadcastAMessageWhenItAcceptsANewClientConnection() {
    var deferred = Promise.defer();
    var pendingExpactations = 3; // the server should send 3 msg_newuser in total
    function notifyMetExpectation() {
        pendingExpactations--; 
        if (pendingExpactations == 0) {
            deferred.resolve();
        }
    }

    var client1 = io.connect(socketIoUrl); // the server should send 1 msg_newuser (to client 1)
    var client2 = io.connect(socketIoUrl); // the server should send 2 msg_newuser (to client 1 and client 2)

    client1.on('msg_newuser', function(msg) {
        notifyMetExpectation();
    });
    
    client2.on('msg_newuser', function(msg) {
        notifyMetExpectation();
    });

    return deferred.promise;
}


function itShouldForwardObservationsReceivedOnTheRESTAPI() {
    var client = io.connect(socketIoUrl);
    var deferred = Promise.defer();
    client.on('msg_observation', function(msg) {
        deferred.resolve(msg);
    });
    var obs = observations.generateObservation();
    observations.sendObservation(obs);
    return deferred.promise;
    
}

function itShouldForwardObservationsReceivedOnTheRESTAPIToALLClients() {
    var deferred = Promise.defer();
    var pendingExpactations = 2; // the server should send 2 msg_observation in total
    function notifyMetExpectation() {
        pendingExpactations--; 
        if (pendingExpactations == 0) {
            deferred.resolve();
        }
    }

    var client1 = io.connect(socketIoUrl); 
    var client2 = io.connect(socketIoUrl); 

    client1.on('msg_observation', function(msg) {
        notifyMetExpectation();
    });
    
    client2.on('msg_observation', function(msg) {
        notifyMetExpectation();
    });

    var obs = observations.generateObservation();
    observations.sendObservation(obs);

    return deferred.promise;    
}