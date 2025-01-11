import { name } from 'ejs';

const homeController = (req, res) => {
	const data = {
		name: 'imran',
	};
	res.render('index.ejs', data);
};
export { homeController };
