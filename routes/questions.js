// routes/questions.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.post('/', async (req, res) => {
    try {
        const {
            subject,
            chapter,
            topic,
            question,
            options,
            correctAnswer,
        } = req.body;

        const newQuestion = new Question({
            subject,
            chapter,
            topic,
            question,
            options,
            correctAnswer,
        });

        await newQuestion.save();
        res.status(201).json({ message: 'Question added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        // Retrieve all questions from the database
        const questions = await Question.find();

        res.status(200).json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;
