import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isDoctor: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  notification: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  seennotification: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
}, {
  timestamps: true, // adds createdAt and updatedAt
  tableName: 'users', // explicit table name
});

export default User;

