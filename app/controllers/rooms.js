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

    var query = Room.find({}).select('name owner closed -_id');

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
        return res.status(201).location('/rooms/' + newRoom._id).end();
    });
});

router.put('/', function (req, res, next) {

});

router.delete('/:id', function (req, res, next) {
    var name = req.params["id"];

    Room.findOneAndRemove({name: name}, function(err, model) {
        if(err) return next(err);
        console.log("Removed !");
        return res.status(200).end();
    });
});

router.put('/:id', function (req, res, next) {
    var name = req.params["id"];

    Room.findOneAndUpdate(
        {name: name},
        {closed: req.body.status},
        function(err, model) {
            if(err) return next(err);
            console.log("Updated !");
            return res.status(200).end();
        }
    );
});

router.post('/:id', function (req, res, next) {
    var name = req.params["id"];

    Room.findOneAndUpdate(
        {name: name},
        {$push: {questions: {
            question : req.body.question,
            possibilities: req.body.possibilities,
            answers: req.body.answers
        }}},
        function(err, model) {
            if(err) return next(err);
            console.log("Updated !");
            return res.status(201).end();
        }
    );
});