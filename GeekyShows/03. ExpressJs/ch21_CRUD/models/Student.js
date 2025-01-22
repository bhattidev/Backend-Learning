import mongoose from 'mongoose';
import { type } from 'os';

// Defining Schema
const studentSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	age: { type: Number, required: true, min: 18, max: 60 },
	fees: {
		type: mongoose.Decimal128,
		require: true,
		validate: (value) => value >= 5000,
	},
});

// Model
const StudentModel = mongoose.model('student', studentSchema);

export default StudentModel;
