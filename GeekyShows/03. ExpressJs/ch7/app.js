// Routing

// const express = require('express');

import express from 'express';
const app = express();
const port = process.env.PORT || '3000';

// app.get('/student/delete/:id', (req, res) => {
// 	res.send(`Student Deleted ${req.params.id}`);
// });

// app.get('/product/:category/:id', (req, res) => {
// 	const { category, id } = req.params;
// 	res.send(
// 		// `Product Category: ${req.params.category}. Product Id: ${req.params.id}`
// 		` Product Category: ${category} and Id: ${id}`
// 	);
// });

app.get('/student/delete/:id([0-9]{2})', (req, res) => {
	res.send(`Student Deleted ${req.params.id}`);
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
