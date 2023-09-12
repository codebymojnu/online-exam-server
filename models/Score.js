const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: String,
    score: Number,
    time: Number,
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Score', scoreSchema);
