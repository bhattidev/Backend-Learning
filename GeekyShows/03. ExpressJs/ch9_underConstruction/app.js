import express from 'express';
import web from './routes/web.js';
import underConstruction from './middleware/underConstruction.js';
const app = express();
const port = process.env.PORT || '3000';

//Application level midleware
// app.use(underConstruction);
app.use('/about', underConstruction);

//view engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('public'));

// Load Routes
app.use('/', web);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
