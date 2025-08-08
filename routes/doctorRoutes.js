import express from "express";
import  {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
  createDoctorController
} from "../controllers/doctorCtrl.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

//POST SINGLE DOC INFO


router.post("/createDoctor", authMiddleware, createDoctorController);

router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

export default router;
