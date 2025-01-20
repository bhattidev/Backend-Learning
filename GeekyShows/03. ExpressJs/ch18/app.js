import express from 'express';
import connectDB from './db/connectdb.js';
import createDoc from './models/students.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL =
	process.env.DATABASE_URL || 'mongodb://localhost:27017/schooldb';

// Load Routes

// database

connectDB(DATABASE_URL);

// Create and Save Document
createDoc('Imran', 26, 8999.33, ['dancing', 'racing'], false, {
	value: 'This is bad',
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
