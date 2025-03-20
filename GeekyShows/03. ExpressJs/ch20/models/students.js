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

// Retrive All Document

const getAllDoc = async () => {
	const result = await studentModel.find();
	console.log(result);
};

export { getAllDoc };
