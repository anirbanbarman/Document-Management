const multer = require('multer');
const path = require('path');
const { UPLOAD_PATH } = require('../config');
const fs = require('fs');


// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const uploadDocument = (req, res) => {
  if (!req.file) return res.status(400).send({ message: 'No file uploaded' });
  res.status(200).send({ message: 'File uploaded successfully', file: req.file });
};

// CRUD operation - Get all documents (simple list)
const getDocuments = (req, res) => {
    const uploadDir = path.join(__dirname, '../uploads'); // Ensure this matches the correct directory path

    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error('Error reading upload directory:', err);
            return res.status(500).send({ message: 'Unable to fetch documents' });
        }

        // Send the list of files as a response
        const documents = files.map((file) => ({
            name: file,
            url: `/uploads/${file}`, // URL to download or view the file
        }));

        res.status(200).send({ documents });
    });
};
const deleteDocument = (req, res) => {
    const { fileName } = req.params;

    if (!fileName) {
        return res.status(400).send({ message: 'File name is required' });
    }

    const filePath = path.join(__dirname, '../uploads', fileName);

    fs.unlink(filePath, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File does not exist
                return res.status(404).send({ message: 'File not found' });
            }
            // Other errors
            console.error('Error deleting file:', err);
            return res.status(500).send({ message: 'Unable to delete file' });
        }

        res.status(200).send({ message: 'File deleted successfully' });
    });
};

module.exports = { upload, uploadDocument, getDocuments, deleteDocument };

