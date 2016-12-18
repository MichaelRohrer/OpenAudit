function RealtimeService() {

    var socketio;

    var usernames = {};
    var rooms = [];


    function setup(io) {
        socketio = io;
        socketio.on("connection", function (socket) {
            socket.emit("msg_welcome");
            socketio.emit("msg_newuser");
        });
    }
    
    function updateRooms() {
        //do a refresh
    }

    function updateQuestions(room, data) {

    }

    function updateResult(room, question, data) {

    }
 
    function notifyObservation(observation) {
        socketio.emit("msg_observation", observation);
    }

    return {
        setup: setup,
        notifyObservation : notifyObservation,
        updateRooms: updateRooms,
        updateQuestions: updateQuestions,
        updateResult: updateResult
    }

}

module.exports = new RealtimeService();