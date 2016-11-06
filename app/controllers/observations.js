var config = require('../../config/config.js');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Observation = mongoose.model('Observation');
var realtime = require('../realtime/realtime.js');

module.exports = function (app) {
    app.use('/observations', router);
};

router.post('/', function (req, res, next) {
    var newObservation = new Observation(req.body);
    newObservation.save(function (err, doc, n) {
        if (err) {
            console.log(err);
            if (err.name === "ValidationError") {
                return next({ status: 422, message: "Invalid observation data" });
            } else {
                return next(err);
            }
        }
        //realtime.notifyObservation(req.body);
        return res.status(201).location('/observations/' + newObservation._id).end();
    });
});
