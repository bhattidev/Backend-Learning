import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

app.use('/api', authRoutes); // for /register & /login
app.use('/api/users', userRoutes); // protect this in next step
