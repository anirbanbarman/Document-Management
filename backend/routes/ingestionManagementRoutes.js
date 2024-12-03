const express = require('express');
const { listIngestionProcesses } = require('../controllers/ingestionController');
const router = express.Router();

// Get All Ingestion Processes
router.get('/', listIngestionProcesses);

module.exports = router;
