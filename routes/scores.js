const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scoresController');

// Endpoint to handle score submission
router.post('/submit', scoresController.submitScore);
// routes/scoreRoutes.js
router.get('/get', scoresController.getAllScores);

module.exports = router;


module.exports = router;
