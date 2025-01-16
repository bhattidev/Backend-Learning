import express from 'express';
const app = express();
const port = process.env.PORT || '3000';

// Load Routes

// app.use();

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
