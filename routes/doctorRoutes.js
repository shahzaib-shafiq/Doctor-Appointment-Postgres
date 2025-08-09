import express from "express";
import  {
 createDoctorController
} from "../controllers/doctorCtrl.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

//POST SINGLE DOC 
router.post("/createDoctor", authMiddleware,  createDoctorController);
export default router;
