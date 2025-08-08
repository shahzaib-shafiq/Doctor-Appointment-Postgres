import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const Patient = sequelize.define('Patient', {
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
    address: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    tableName: 'patients',
});

export default Patient;

