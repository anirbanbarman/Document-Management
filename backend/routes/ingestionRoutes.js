const express = require('express');
const router = express.Router();
const { triggerIngestion,getIngestionStatus } = require('../controllers/ingestionController');
const { verifyToken } = require('../middleware/authMiddleware');

// Route to trigger ingestion process
router.post('/trigger', verifyToken, triggerIngestion);

// Get Ingestion Status
router.get('/status/:id',verifyToken, getIngestionStatus);

module.exports = router;
