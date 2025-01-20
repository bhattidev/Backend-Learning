import mongoose from 'mongoose';

// Defining Schema
const studentSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	age: { type: Number, required: true, min: 18, max: 50 },
	fees: {
		type: mongoose.Decimal128,
		required: true,
		validate: {
			validator: (v) => parseFloat(v) >= 5500.5,
			message: (props) => `${props.value} is below the minimum fee of 5500.5`,
		},
	},
	hobbies: { type: Array },
	isactive: { type: Boolean, default: true },
	comments: [
		{ value: { type: String }, publish: { type: Date, default: Date.now } },
	],
	join: { type: Date, default: Date.now },
});

// Compiling Schema
const studentModel = mongoose.model('student', studentSchema);

const createDoc = async (nm, ag, fe, hob, isact, comt) => {
	try {
		// Creating New Document

		const studentDoc = new studentModel({
			name: nm,
			age: ag,
			fees: fe,
			hobbies: hob,
			isactive: isact,
			comments: comt,
		});

		// Saving Document
		const result = await studentDoc.save();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

export default createDoc;
