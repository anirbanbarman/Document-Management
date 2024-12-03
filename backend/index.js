const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');
const ingestionRoutes = require('./routes/ingestionRoutes');
const ingestionManagementRoutes = require('./routes/ingestionManagementRoutes');
const qaRoutes = require('./routes/qaRoutes');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/ingestion', ingestionRoutes);
app.use('/api/ingestion-management', ingestionManagementRoutes);
app.use('/api/qa', qaRoutes); 

// Static file serving for document uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
