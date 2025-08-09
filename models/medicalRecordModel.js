import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const Record = sequelize.define('record', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    paientId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'patients',
            key: 'id',
        },
    },
    recordDate: {
        type: DataTypes.DATE,   
        allowNull: false,
    },
    diagnosis: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    treatment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    labtest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reports: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    timestamps: true,
    tableName: 'records',
});
Record.sync();

//Sync the model with the database, checking if the table already exists
Record.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
  .then((result) => {
    if (result.changed) {
      console.log(" Record table updated successfully.");
    } else {
      console.log(" Record table already exists and is up to date.");
    }
  })
  .catch((err) => {
    console.error("Error synchronizing  Record table:", err);
  });

export default Record;

