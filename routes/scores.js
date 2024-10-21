const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scoresController');

// Endpoint to handle score submission
router.post('/', scoresController.submitScore);
// routes/scoreRoutes.js
router.get('/', scoresController.getAllScores);

module.exports = router;


module.exports = router;
