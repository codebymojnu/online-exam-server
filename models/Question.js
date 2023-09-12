// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    subject: String,
    chapter: String,
    topic: String,
    question: String,
    options: [String],
    correctAnswer: String,
});

module.exports = mongoose.model('Question', questionSchema);
