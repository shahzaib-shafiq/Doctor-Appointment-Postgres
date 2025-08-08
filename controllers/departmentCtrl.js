import Department from '../models/departmentModel.js';


const CreateDepartmentController = async (req, res) => {
  try {
   const {name,description}=req.body;
    const Department= await Department.create({
      name,
      description,
    });
    res.status(201).send({
      success: true,
      message: "Department Created Successfully",
      data: Department, 
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr Creating Department",
      error,
    });
  }
};

;

export {
 CreateDepartmentController
};
