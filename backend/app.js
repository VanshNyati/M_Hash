const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');  // Import path module to handle static files
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Serve API routes
app.use('/api', userRoutes);

// Serve the static files from the frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle any other routes and send them to the frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
