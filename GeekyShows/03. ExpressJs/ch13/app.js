import express from 'express';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || 3000;

//Set template engine
app.set('view egine', 'ejs');

//Add routes
app.use('/', web);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
