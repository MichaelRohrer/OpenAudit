function RealtimeService() {

    var socketio;

    function setup(io) {
        socketio = io;
        socketio.on("connection", function (socket) {
            socket.emit("msg_welcome");
            socketio.emit("msg_newuser");
        });
    }
 
    function notifyObservation(observation) {
        socketio.emit("msg_observation", observation);
    }

    return {
        setup: setup,
        notifyObservation : notifyObservation
    }

}

module.exports = new RealtimeService();