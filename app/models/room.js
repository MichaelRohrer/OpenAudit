var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoomSchema = new Schema({
    name: { type: String, required: true, index: { unique: true }},
    owner: { type: String, required: true },
    closed: { type: Boolean, default: false },
    questions: [{
        question: String,
        possibilities: [String],
        answers: [Number]
    }]
});

mongoose.model('Room', RoomSchema);