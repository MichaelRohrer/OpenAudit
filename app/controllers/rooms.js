var config = require('../../config/config.js');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Room = mongoose.model('Room');
var realtime = require('../realtime/realtime.js');

module.exports = function (app) {
    app.use('/rooms', router);
};


router.get('/', function (req, res, next) {

    var query = Room.find({}).select('name owner -_id');

    query.exec(function (err, rooms) {
        if (err) return next(err);
        res.json(rooms);
    });
});

router.post('/', function (req, res, next) {
    var newRoom = new Room(req.body);
    newRoom.save(function (err, doc, n) {
        if (err) {
            console.log(err);
            if (err.name === "ValidationError") {
                return next({ status: 422, message: "Invalid observation data" });
            } else {
                return next(err);
            }
        }
        realtime.notifyObservation(req.body);
        return res.status(201).location('/rooms/' + newRoom._id).end();
    });
});

router.put('/', function (req, res, next) {

    console.log(req.body.id);
    console.log(req.body.data);

    // find by some conditions and update
    Room.findOneAndUpdate(
        {_id: req.body.id},
        {$push: {questions: req.body.data}},
        function(err, model) {
            if(err) return next(err);

            console.log("Updated !");
            return res.status(200).end();
        });
});

