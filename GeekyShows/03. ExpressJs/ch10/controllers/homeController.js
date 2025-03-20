import path, { join } from 'path';
const homeController = (req, res) => {
	// res.send('<h1>Home Page</h1>');
	// res.sendFile(path.resolve('../views/index.html'));
	res.sendFile(join(process.cwd(), 'views', 'index.html'));
};

export { homeController };
