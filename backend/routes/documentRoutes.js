const express = require('express');
const router = express.Router();
const { upload, uploadDocument, getDocuments, deleteDocument } = require('../controllers/documentController');
const { verifyToken, isEditor } = require('../middleware/authMiddleware');

// Route for uploading documents
router.post('/upload', verifyToken, isEditor, upload.single('file'), uploadDocument);

// Route for fetching documents (Admin only)
router.get('/', verifyToken, getDocuments);
// Route for deleting a document (Admin only)
router.delete('/:fileName', verifyToken, isEditor, deleteDocument);

module.exports = router;
