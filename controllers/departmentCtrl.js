
import Department from "../models/departmentModel.js";
//register callback

const createDepartmentController = async (req, res) => {
    try {
        const { name, description } = req.body
        const new_dept = await Department.create({ name, description });
        res.status(201).send({ message: "Register Sucessfully", success: true, dept: new_dept });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Register Controller ${error.message}`,
        });
    }
};
const getAllDepartmentController = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(201).send({ message: "All Departments Fetched Sucessfully", success: true, departments });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `${error.message}`,
        });
    }
};
const getSingleDepartmentController = async (req, res) => {
    try {
        const dept = await Department.findOne({where:{id:req.params.id}});
        res.status(201).send({ message: "Dept Fetched Sucessfully", success: true, deptartment:dept });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `${error.message}`,
        });
    }
};
const deleteDepartmentController = async (req, res) => {
    try {
        const dept = await Department.destroy({where:{id:req.params.id} });
        res.status(201).send({ message: "Deleted Sucessfully", success: true, dept });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `${error.message}`
        });
    }
};
const updateDepartmentController = async (req, res) => {
  try {
    const { name, description } = req.body;

    const [count, rows] = await Department.update(
      { name, description },
      {
        where: { id: req.params.id },
        returning: true
      }
    );
    if (count === 0) {
      return res.status(404).send({ success: false, message: "Department not found" });
    }

    res.status(200).send({
      message: "Department updated successfully",
      success: true,
      dept: rows[0]
    });

  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: `Update Department Error: ${error.message}`,
    });
  }
};


export {
    createDepartmentController,
    getAllDepartmentController,
    getSingleDepartmentController,
    deleteDepartmentController,
    updateDepartmentController
};
