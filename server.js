import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDb from './config/db.js';
// import syncDb from './config/syncTables.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js'
import { sequelize } from './config/db.js';
// import testRoutes from './routes/testRoutes.js';
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

Dbconnection();
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ All tables synced successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error syncing tables:", error);
    process.exit(1);
  }
})();
//app.use('/api/v1/test', testRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/doctor', doctorRoutes);
app.use('/api/v1/department', departmentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.cyan.bold);
});