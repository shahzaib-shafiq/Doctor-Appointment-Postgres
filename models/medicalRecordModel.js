import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const Record = sequelize.define('Record', {
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

export default Record;

