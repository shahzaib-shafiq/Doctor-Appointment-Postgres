import express from "express";
import  {
  createDepartmentController,
  getAllDepartmentController,
  getSingleDepartmentController,
  deleteDepartmentController,
  updateDepartmentController
} from "../controllers/departmentCtrl.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

//GET METHOD || USERS
router.post("/createDepartment", authMiddleware, createDepartmentController);
router.get("/getAllDepartment", authMiddleware,getAllDepartmentController );
router.get("/:id", authMiddleware, getSingleDepartmentController);
router.patch("/:id", authMiddleware, updateDepartmentController);
router.delete("/:id", authMiddleware, deleteDepartmentController);
export default router;
