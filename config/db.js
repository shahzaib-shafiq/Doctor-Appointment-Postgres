import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import colors from 'colors';
dotenv.config(); // Load .env variables
const sequelize = new Sequelize(
  process.env.DB_NAME,       
  process.env.DB_USER,      
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false, // disable SQL logging in console
  }
);

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log(colors.green('✅ PostgreSQL connected with Sequelize!'));
  } catch (error) {
    console.error(colors.red('❌ Failed to connect to the database:'), error);
  }
};

export { sequelize };
export default connectDb;
