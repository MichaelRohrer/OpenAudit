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
    Room.find(function (err, rooms) {
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
