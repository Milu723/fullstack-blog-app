// Import required packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// This configures our .env file
require('dotenv').config();

// Create an instance of the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON data

// --- MongoDB Connection ---
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});
// --- End of DB Connection ---

// --- API Routes ---
// 1. Import the routes file
const postsRouter = require('./routes/posts');

// 2. Tell Express to use the postsRouter for any URL that starts with /api/posts
app.use('/api/posts', postsRouter);
// --- End of API Routes ---

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
