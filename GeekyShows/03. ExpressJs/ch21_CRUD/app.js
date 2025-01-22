import express from 'express';
import connectDB from './db/connectdb.js';
import { join } from 'path';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL =
	process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/schooldb';

// Database Connection
connectDB(DATABASE_URL);

// Static Files
app.use('/student', express.static(join(process.cwd(), 'public')));
app.use('/student/edite', express.static(join(process.cwd(), 'public')));

// Load Routess
app.use('/student', web);

// Set Template Engine
app.set('view engine', 'ejs');

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
