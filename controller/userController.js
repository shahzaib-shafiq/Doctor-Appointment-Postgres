
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import moment from "moment";
import { registerSchema } from "../Validators/UserValidator.js";
//register callback

const registerController = async (req, res) => {
  try { 
    const {firstName,lastName,email,password,phone,role,}=req.body
    // const { error } = registerSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).send({
    //     success: false,
    //     message: error.details[0].message,
    //   });
    // }
    const exisitingUser = await User.findOne({ where: { email: email } });//await User.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // password = hashedPassword;
    const new_user = await User.create({ firstName,lastName,email,password:hashedPassword,phone,role });
    new_user.password=null;
    res.status(201).send({ message: "Register Sucessfully", success: true,user:new_user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

// login callback
const loginController = async (req, res) => {
  try {
    const {email,password}=req.body
    const user = await User.findOne({ email: email});
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invlid Email or Password", success: false });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({ message: "Login Success", success: true,token: token,refreshToken:refreshToken });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

const getSingleUserController = async (req, res) => {
  try {
    const user = await User.findOne({where:{id: req.params.id}});
    if (!user) {
      return res.status(200).send({
        message: "user not found",
        success: false,
      });
    } else {
      user.password = undefined;
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};
const getAllUsersController = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users.length) {
      return res.status(200).send({
        message: "No users found",
        success: false,
      });
    }

    const usersWithoutPasswords = users.map(user => {
      const userObj = user.toJSON();
      delete userObj.password;
      return userObj;
    });

    res.status(200).send({
      success: true,
      data: usersWithoutPasswords,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error fetching users",
      success: false,
      error,
    });
  }
};
export {
  loginController,
  registerController,
  getSingleUserController,
};