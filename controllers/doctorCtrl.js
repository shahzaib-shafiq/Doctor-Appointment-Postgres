import Doctor from "../models/doctorModel.js";
const createDoctorController = async (req, res) => {
  try {
    console.log(req.body)
    const {specialization,experience,fee,license}=req.body
    const doctor = await Doctor.create({ specialization,experience,fee,license });
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
