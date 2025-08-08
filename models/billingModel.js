import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

const Bill = sequelize.define('Bill', {
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
    tableName: 'doctors',
})
export default Bill;