import express from 'express';
import student from './routes/studen.js';
import teacher from './routes/teacher.js';

const app = express();
const port = process.env.PORT || '3000';

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});

// Load Router Module

app.use('/student', student);
app.use('/teacher', teacher);
