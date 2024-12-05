const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');  // Import auth routes
const pollRoutes = require('./routes/polls');  // Import poll routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS for all domains
app.use(express.json());  // Parse incoming JSON requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/pollsandsurveys', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Set up routes
app.use('/api/auth', authRoutes);  // Use auth routes at /api/auth
app.use('/api/polls', pollRoutes);  // Use poll routes at /api/polls

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
