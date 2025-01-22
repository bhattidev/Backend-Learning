import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
	try {
		const DB_OPTIONS = {
			dbName: 'schooldb',
		};
		await mongoose.connect(DATABASE_URL, DB_OPTIONS);
		console.log('Connected Successfully to MongoDB...');
	} catch (err) {
		console.error('Database Connection Error:', err.message);
		process.exit(1);
	}
};

export default connectDB;
