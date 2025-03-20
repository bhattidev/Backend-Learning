// const express = require('express');
import express from 'express';
import web from './routes/web.js';
import { join } from 'path';

const app = express();
const port = process.env.PORT || '3000';

//Static Files
app.use(express.static(join(process.cwd(), 'public')));

// Load Routes
app.use('/', web);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
