var mongoose = require('mongoose');
var Room = mongoose.model('Room');
var Question = mongoose.model('Question');

function RealtimeService() {

    var socketio;

    var usernames = {};
    var rooms = ['global'];


    function setup(io) {
        socketio = io;

        socketio.on("connection", function (socket) {

            socket.emit("msg_welcome");
            socketio.emit("msg_welcome");

            socket.on('msg_get_room_from_owner', function (data) {

                var query = Room.find({owner: data.owner}).select('name owner closed -_id');

                query.exec(function (err, rooms) {
                    if (err) {
                        console.log("Error retrieving rooms from user")
                    }
                    else {
                        console.log("Success retrieving rooms from user");
                        socket.emit('msg_update_managed_rooms', rooms);
                    }
                });
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
                    else {
                        console.log("Room: " + data.name + " from: " + data.owner + " created!");

                        var query = Room.find({}).select('name owner closed -_id');

                        query.exec(function (err, rooms) {
                            if (err) {
                                console.log("Error creating the room")
                            }
                            else {
                                console.log("Success creating the room");
                                socketio.emit('msg_update_rooms', rooms);
                            }
                        });
                    }
                });
            });


            socket.on('msg_close_room', function (data) {
                if (data.room && data.owner) {
                    Room.findOneAndUpdate(
                        {name: data.room},
                        {closed: data.status}, function (err) {
                            if (err) {
                                console.log("Error - > Room: " + data.room + " not closed.");
                            }
                            else {
                                console.log("Success - > Room: " + data.room + " closed.");

                                var query = Room.find({owner: data.owner}).select('name owner closed -_id');

                                query.exec(function (err, rooms) {
                                    if (err) {
                                        console.log("Error updating rooms")
                                    }
                                    else {
                                        console.log("Success updating rooms");
                                        socket.emit('msg_update_managed_rooms', rooms);
                                        socketio.emit('msg_update_rooms', rooms);

                                    }
                                });
                            }
                        }
                    );
                }
            });


            socket.on('msg_delete_room', function (data) {
                if (data.room && data.owner) {
                    Room.findOneAndRemove({name: data.room}, function (err) {
                        if (err) {
                            console.log("Error - > Room: " + data.room + " not removed.");
                        }
                        else {
                            console.log("Success - > Room: " + data.room + " removed.");

                            var query = Room.find({owner: data.owner}).select('name owner closed -_id');

                            query.exec(function (err, rooms) {
                                if (err) {
                                    console.log("Error deleting rooms")
                                }
                                else {
                                    console.log("Success deleting rooms");
                                    socket.emit('msg_update_managed_rooms', rooms);
                                    socketio.emit('msg_update_rooms', rooms);
                                }
                            });
                        }
                    });
                }
            });


            socket.on('msg_add_question', function (data) {

                Question.find({roomId: data.room}).count(function (err, count) {

                    var newQuestion = new Question({
                        qId: count,
                        roomId: data.room,
                        question: data.question,
                        possibilities: data.possibilities,
                        answers: data.answers
                    });

                    newQuestion.save(function (err) {

                        var query = Question.find({qId: count, roomId: data.room})
                            .select('qId question possibilities answers -_id');

                        query.exec(function (err, question) {
                            socketio.emit('msg_update_questions', question);
                        });
                    });
                });
            });


            socket.on('msg_answer_question', function (data) {

                var query = Question.find({roomId: data.roomId, qId: data.qId}).select('answers -_id');

                query.exec(function (err, res) {
                    if (err) {
                        console.log("Error recording answer.");
                    }
                    else {
                        console.log("Success recording answer.");
                        res[0].answers[data.answerIndex] = res[0].answers[data.answerIndex] + 1;

                        Question.findOneAndUpdate({
                            roomId: data.roomId,
                            qId: data.qId
                        }, {answers: res[0].answers}, function (err) {
                            socketio.emit('msg_update_question_results.', res[0]);
                            console.log("Transmitting data change.");
                        });
                    }
                });
            });
        });
    }

    return {
        setup: setup
    }
}

module.exports = new RealtimeService();