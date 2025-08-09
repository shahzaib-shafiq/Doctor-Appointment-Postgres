import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const Prescription = sequelize.define('prescription', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    appointmentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'appointments',
            key: 'id',
        },
    },
    meidicine: {
        type: DataTypes.STRING
    },
    instructions: {
        type: DataTypes.STRING
    },
    
}, {
    timestamps: true,
    tableName: 'prescriptions',
});


Prescription.sync();

//Sync the model with the database, checking if the table already exists
Prescription.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
  .then((result) => {
    if (result.changed) {
      console.log("Prescription table updated successfully.");
    } else {
      console.log("Prescription table already exists and is up to date.");
    }
  })
  .catch((err) => {
    console.error("Error synchronizing Prescription table:", err);
  });

export default Prescription;

