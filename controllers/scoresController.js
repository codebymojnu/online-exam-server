const Score = require('../models/Score');

// Handle score submission
exports.submitScore = async (req, res) => {
    try {
        const { name, score, time } = req.body;

        // Create a new Score document and save it to MongoDB
        const newScore = new Score({
            name,
            score,
            time,
        });

        await newScore.save();

        res.status(201).json({ message: 'Score submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllScores = async (req, res) => {
    try {
        const scores = await Score.find().sort('-timestamp'); // Sort scores by timestamp in descending order
        res.json(scores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
