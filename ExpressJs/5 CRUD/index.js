import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json()); // To parse JSON body

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/expressDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('DB Error:', err));

app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
