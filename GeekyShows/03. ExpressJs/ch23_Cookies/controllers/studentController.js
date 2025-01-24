class StudentController {
	static set_cookie = (req, res) => {
		res.cookie('username', 'imran');
		// res.cookie('username', 'ali');
		// res.cookie('car', '6');
		res.send('Cookie Set....');
	};

	static get_cookie = (req, res) => {
		console.log(req.cookies);
		res.send('Cookie Get....');
	};

	static delete_cookie = (req, res) => {
		res.clearcookie('username');
		res.send('Cookie Deleted....');
	};
}

export default StudentController;
