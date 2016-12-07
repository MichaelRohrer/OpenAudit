var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoomSchema = new Schema({
    name: { type: String, required: true, index: { unique: true }},
    owner: { type: String, required: true }
});

mongoose.model('Room', RoomSchema);