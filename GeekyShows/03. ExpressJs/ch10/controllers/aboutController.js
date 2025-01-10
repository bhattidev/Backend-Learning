const aboutController = (req, res) => {
	// res.send('<h1>About Page</h1>');
	res.sendFile('../views/about.html');
};

export { aboutController };
