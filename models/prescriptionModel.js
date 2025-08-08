import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const Prescription = sequelize.define('Prescription', {
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
    tableName: 'patients',
});

export default Prescription;

