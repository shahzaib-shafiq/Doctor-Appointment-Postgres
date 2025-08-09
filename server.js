import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js'
dotenv.config(); // Ensure environment variables are loaded
connectDb(); // Connect to MongoDB
// syncDb();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/department', departmentRoutes);
app.use('/api/v1/doctor', doctorRoutes);




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.cyan.bold);
});