import StudentModel from '../models/Student.js';

class StudentController {
	// Create Document
	static createDoc = (req, res) => {
		console.log('Create Doc Post Method');
		console.log(req.body);
		res.redirect('/student');
	};

	// Retrive All Document
	static getAllDoc = async (req, res) => {
		try {
			const result = await StudentModel.find();
			res.render('index', { data: result });
		} catch (err) {
			console.log(err);
		}
	};

	static editDoc = (req, res) => {
		res.render('edite');
	};

	static updateDocById = (req, res) => {
		res.redirect('/student');
	};

	static deleteDocById = (req, res) => {
		res.redirect('/student');
	};
}
export default StudentController;
