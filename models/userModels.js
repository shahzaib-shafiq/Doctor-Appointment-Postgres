import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // OR: () => uuidv4(),
    primaryKey: true,
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
    type: DataTypes.ENUM('patient', 'doctor', 'admin'),
    defaultValue: 'admin',
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

// const userModel = mongoose.model("users", userSchema);

// export default userModel;
