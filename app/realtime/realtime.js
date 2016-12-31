var mongoose = require('mongoose');
var Room = mongoose.model('Room');
var Question = mongoose.model('Question');

function RealtimeService() {

    var socketio;

    var usernames = {};
    var rooms = [];


    function setup(io) {
        socketio = io;

        socketio.on("connection", function (socket) {

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

            socket.on('msg_join_room', function (data) {
                socket.join(data.room);
                socket.emit('msg_join_room');
            });

            socket.on('msg_leave_room', function (data) {
                socket.join(data.room);
                socket.emit('msg_leave_room');
            });

            socket.on('msg_create_room', function (data) {
                var newRoom = new Room(data);
                newRoom.save(function (err, doc, n) {
                    if (err) {
                        console.log(err);

                        var response = {};
                        response.status = 'nok';
                        response.room = data.name;
                        response.replyTo = 'msg_create_room';
                        response.msg = 'The room ' + data.name + ' already exists';
                        socket.emit('msg_status', response);
                    }
                    else {
                        var query = Room.find({}).select('name owner closed -_id');
                        query.exec(function (err, rooms) {
                            if (err) {
                                console.log("Error creating the room")
                            }
                            else {
                                var response = {};
                                response.status = 'ok';
                                response.room = data.name;
                                response.replyTo = 'msg_create_room';
                                response.msg = 'The room ' + data.name + ' has been created';
                                socket.emit('msg_status', response);
                                socketio.emit('msg_update_rooms', rooms);
                                console.log("Room: " + data.name + " from: " + data.owner + " created");
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

                                var response = {};
                                response.status = 'nok';
                                response.room = data.room;
                                response.replyTo = 'msg_close_room';
                                response.msg = "The room " + data.room + " can't be updated";

                                socket.emit('msg_status', response);
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

                                        var response = {};
                                        response.status = 'ok';
                                        response.room = data.room;
                                        response.replyTo = 'msg_close_room';
                                        response.msg = "The room " + data.room + " has been closed";

                                        socket.emit('msg_update_managed_rooms', rooms);
                                        socketio.emit('msg_update_rooms', rooms);
                                        socket.emit('msg_status', response);

                                        console.log("Success updating rooms");
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

                            var response = {};
                            response.status = 'nok';
                            response.room = data.room;
                            response.replyTo = 'msg_delete_room';
                            response.msg = "The room " + data.room + " can't be deleted";

                            socket.emit('msg_status', response);
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

                                    var response = {};
                                    response.status = 'ok';
                                    response.room = data.room;
                                    response.replyTo = 'msg_delete_room';
                                    response.msg = "The room " + data.room + " has been deleted";

                                    socketio.emit('msg_update_rooms', rooms);
                                    socket.emit('msg_update_managed_rooms', rooms);
                                    socket.emit('msg_status', response);

                                    console.log("Success deleting rooms");
                                }
                            });
                        }
                    });
                }
            });

            socket.on('msg_get_questions', function (data) {

                var query = Question.find({roomId: data.room})
                    .select('qId question possibilities answers -_id');

                query.exec(function (err, questions) {
                    socket.emit('msg_update_questions', questions);
                });
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
                        var response = {};
                        if(err){
                            response.status = 'nok';
                            response.msg = "A problem occurred adding the question to the room";
                            socket.emit('msg_status', response);
                        }
                        else{
                            var query = Question.find({qId: count, roomId: data.room})
                                .select('qId question possibilities answers -_id');

                            query.exec(function (err, question) {
                                socketio.to(data.room).emit('msg_update_question', question);

                                response.status = 'ok';
                                response.msg = "The question has been added to the room";
                                socket.emit('msg_status', response);
                            });
                        }
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
                            console.log("Transmitting data change.");

                            var updateData = {};
                            updateData.result = res[0];
                            updateData.index = data.qId;
                            socketio.to(data.roomId).emit('msg_update_question_results', updateData);
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