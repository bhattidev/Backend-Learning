import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
	try {
		await mongoose.connect(DATABASE_URL);
		console.log('Connected Successfully');
	} catch (err) {
		console.log(err);
	}
};

// const connectDB = (DATABASE_URL) => {
// 	return mongoose
// 		.connect(DATABASE_URL)
// 		.then(() => {
// 			console.log('Successful connected');
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };
export default connectDB;
