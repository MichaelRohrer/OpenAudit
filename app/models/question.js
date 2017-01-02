var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    qId: { type: Number, required: true},
    roomId: {type: String, required: true},
    question: {type: String, required: true},
    possibilities: [String],
    answers: [Number],
    correctAnswerIndex: { type: Number, required: true},
    status: { type: Boolean, default: false, required: true}
});

mongoose.model('Question', QuestionSchema);