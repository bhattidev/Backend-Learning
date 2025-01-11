import express from 'express';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3000';

//set template engine
app.set('view egine', 'ejs');

//static files
app.use(express.static('public'));

// Load Routes
app.use('/', web);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
