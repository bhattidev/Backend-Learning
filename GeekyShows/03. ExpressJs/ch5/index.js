// Routing

// const express = require('express');

import express from 'express';
const app = express();
const port = process.env.PORT || '3000';

//Routes

app.get('/', (req, res) => {
	res.send('Home Page');
});
app.get('/about', (req, res) => {
	res.send('About Page');
});
app.get('/contact', (req, res) => {
	res.send('Contact Page');
});

app.get('ab?cd', (req, res) => {
	res.send('This route path will match acd and abcd');
});
app.get(/a/, (req, res) => {
	res.send('This is a');
});

app.all('*', (req, res) => {
	res.send('Page Not Found!!! ');
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
