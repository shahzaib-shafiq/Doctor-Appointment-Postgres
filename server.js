import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDb from './config/db.js';
dotenv.config(); // Ensure environment variables are loaded
// connectDb(); // Connect to MongoDB
// syncDb();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const Dbconnection=async()=>{
await connectDb();
// await syncDb();
console.log(colors.green('✅ PostgreSQL Table Sync!'));
}

//app.use('/api/v1/test', testRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.cyan.bold);
});