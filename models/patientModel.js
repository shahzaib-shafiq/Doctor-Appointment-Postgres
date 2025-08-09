import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const Patient = sequelize.define('patient', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false,
    },
    blood_group: {
        type: DataTypes.STRING,

    },
    adress: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    tableName: 'patients',
});
Patient.sync();

//Sync the model with the database, checking if the table already exists
Patient.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
  .then((result) => {
    if (result.changed) {
      console.log("Patient table updated successfully.");
    } else {
      console.log("Patient table already exists and is up to date.");
    }
  })
  .catch((err) => {
    console.error("Error synchronizing Patient table:", err);
  });


export default Patient;

