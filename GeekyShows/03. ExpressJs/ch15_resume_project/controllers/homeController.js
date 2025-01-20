const homeController = (req, res) => {
	res.render('home.ejs', { title: 'Home' });
};

export default homeController;
