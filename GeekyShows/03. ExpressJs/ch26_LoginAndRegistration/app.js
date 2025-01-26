import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL =
	process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/schooldb';

// Database Connection
connectDB(DATABASE_URL)
	.then(() => console.log('Database Connected'))
	.catch((err) => console.log('Database Connection Error:', err));

app.use(express.urlencoded({ extended: false }));

// Static Files
app.use(express.static('public'));

// Load Routess
app.use('/student', web);

// Set Template Engine
app.set('view engine', 'ejs');

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
