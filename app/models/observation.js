var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObservationSchema = new Schema({
  coordinates: { type: [Number], required: true },
  timestamp: { type: Date, required: true },
  data: {
    sciName: String
  }
});

mongoose.model('Observation', ObservationSchema);

