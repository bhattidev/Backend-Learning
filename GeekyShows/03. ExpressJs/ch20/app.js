import express from 'express';
import connectDB from './db/connectdb.js';
const app = express();
import { getAllDoc } from './models/students.js';
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

// Load Routes

// database

connectDB(DATABASE_URL);

getAllDoc();
// Create and Save Document

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
