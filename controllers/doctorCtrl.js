import Doctor from "../models/doctorModel.js";
const createDoctorController = async (req, res) => {
  try {
    const {specialization,experience,fee,license}=req.body
    const doctor = await doctorModel.create({ specialization,experience,fee,license });
    res.status(200).send({
      success: true,
      message: "doctor Created success",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error Creating Doctor Details",
    });
  }
};


export {
  createDoctorController,
};
