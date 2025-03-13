import express from 'express';
import dotenv from 'dotenv';
import laundryMatsRouter from './laundryMats.js';
import pg from 'pg';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use laundry mat routes
app.use('/machines', laundryMatsRouter);
app.use(express.static(path.join(__dirname, "../client" )))
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});