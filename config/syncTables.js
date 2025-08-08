import { Sequelize } from 'sequelize';
import User from '../models/userModels.js';
const syncDb = async () => {
  try {
    await User.sync();
    console.log(colors.green('✅ PostgreSQL Table Sync!'));
  } catch (error) {
  }
};


export default syncDb;