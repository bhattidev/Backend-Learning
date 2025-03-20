import StudentModel from '../models/Student.js';

class StudentController {
	// Create Document
	static createDoc = async (req, res) => {
		// console.log(req.body.name);
		try {
			const { name, age, fees } = req.body;
			const doc = new StudentModel({ name, age, fees });
			// Saving Document
			const result = await doc.save();
			console.log(result);

			res.redirect('/student');
		} catch (error) {
			console.log(error);
		}
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

	// Show edite form with data
	static editDoc = async (req, res) => {
		try {
			const result = await StudentModel.findById(req.params.id);
			res.render('edite', { data: result });
		} catch (error) {
			console.log(error);
		}
	};

	// Update Document
	static updateDocById = async (req, res) => {
		try {
			const result = await StudentModel.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				}
			);
		} catch (error) {
			console.log(error);
		}
		res.redirect('/student');
	};

	static deleteDocById = async (req, res) => {
		try {
			const result = await StudentModel.findByIdAndDelete(req.params.id);
			res.redirect('/student');
		} catch (error) {
			console.error(error);
			res.status(500).send('Internal Server Error');
		}
	};
}
export default StudentController;
