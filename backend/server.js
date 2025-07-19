require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const claimRoutes = require('./routes/claimRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/claim', claimRoutes);
app.use('/api/leaderboard', userRoutes); // For leaderboard endpoint if needed

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => {
  console.error('MongoDB connection error:', err);
}); 