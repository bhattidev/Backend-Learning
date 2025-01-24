import express from 'express';
import cookieParser from 'cookie-parser';
import web from './routes/web.js';

const app = express();
const port = process.env.PORT || '3000';

// Cookeie Parser
app.use(cookieParser());

// Load Routes
app.use('/', web);

// database

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
