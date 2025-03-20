// const express = require('express');

import express from 'express';
const app = express();
const port = process.env.PORT || '3000';
app.get('/student/all', (req, res) => {
	res.send('All Student');
});

app.get('/student/delete/:id([0-9]{2})', (req, res) => {
	console.log(req.params);
	const { id } = req.params;
	if (id == 10) {
		res.send('Ye sonam ki id 10 hai. so ye delete nhi ho ga.');
	} else {
		res.send(`Student Delete ${id}`);
	}
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
