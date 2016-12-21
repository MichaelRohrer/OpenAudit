var mongoose = require('mongoose');
var Room = mongoose.model('Room');

function RealtimeService() {

    var socketio;

    var usernames = {};
    var rooms = ['global'];


    function setup(io) {
        socketio = io;

        socketio.on("connection", function (socket) {

            socket.emit("msg_welcome");


            socket.on("test", function (data) {
                console.log("This is a test and it has succeed !!!!!!!!!!!!!!!!! ");
                console.log(data.a);
            });

            socket.on('msg_create_room', function (data) {
                var newRoom = new Room(data);
                newRoom.save(function (err, doc, n) {
                    if (err) {
                        console.log(err);
                        if (err.name === "ValidationError") {
                            console.log("ValidationError");
                        }
                    }
                    else{
                        console.log("Room: " + data.name + " from: " + data.owner + " created!");


                        var response = {};
                        var query = Room.find({}).select('name owner closed -_id');

                        query.exec(function (err, rooms) {
                            if (err) return next(err);
                            console.log(rooms);
                            socketio.emit('msg_update_room', rooms);
                        });
                    }
                });
            });


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