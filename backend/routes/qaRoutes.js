const express = require('express');
const { askQuestion,getQAStatus } = require('../controllers/qaController');

const router = express.Router();

// Route to handle asking a question
router.post('/ask-question', askQuestion);

// Route to fetch Q&A status
router.get('/qa-status', getQAStatus);

module.exports = router;
