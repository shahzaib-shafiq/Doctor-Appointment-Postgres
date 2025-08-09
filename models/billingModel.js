import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const Bill = sequelize.define('bill', {
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
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        type: DataTypes.ENUM('paid', 'pending', 'unpaid'),
    },
    paymentDate: {
        type: DataTypes.DATE,
    },
}, {
    timestamps: true,
    tableName: 'bills',
})
Bill.sync();

//Sync the model with the database, checking if the table already exists
Bill.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
  .then((result) => {
    if (result.changed) {
      console.log("Bill table updated successfully.");
    } else {
      console.log("Bill table already exists and is up to date.");
    }
  })
  .catch((err) => {
    console.error("Error synchronizing Bill table:", err);
  });

export default Bill;