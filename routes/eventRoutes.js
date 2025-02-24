const express = require('express');
const router = express.Router();
const { addEvent, getLeaderboard } = require('../controllers/eventController');

// Add Event
router.post('/add-event', addEvent);

// Fetch Leaderboard
router.get('/leaderboard', getLeaderboard);

module.exports = router;
