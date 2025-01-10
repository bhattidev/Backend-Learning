const homeController = (req, res) => {
	res.render('index', {
		name: 'Imran',
	});
};

export { homeController };
