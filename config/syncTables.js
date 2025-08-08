// import User from '../models/userModels.js';
// import Appointment from '../models/appointmentModel.js';
// import Bill from '../models/billingModel.js';
// import Department from '../models/departmentModel.js';
// import Doctor from '../models/doctorModel.js';
// import Record from '../models/medicalRecordModel.js';
// import Patient from '../models/patientModel.js';
// import Prescription from '../models/prescriptionModel.js';

// const syncDb = async () => {
//   try {
//     await  User.sync({ alter: true });
//     await  Appointment.sync({ alter: true });
//     await  Bill.sync({ alter: true });
//     await  Department.sync({ alter: true });
//     await  Doctor.sync({ alter: true });
//     await  Record.sync({ alter: true });
//     await  Patient.sync({ alter: true });
//     await  Prescription.sync({ alter: true });
//   } catch (error) {
//   }
// };
import  {sequelize} from "./db.js";
import { User } from "./models/User.js";


export default syncDb;