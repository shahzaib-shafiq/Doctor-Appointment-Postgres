import express from "express";
import  {
    CreateDepartmentController
} from "../controllers/departmentCtrl.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/CreateDepartment", authMiddleware, CreateDepartmentController);

export default router;
