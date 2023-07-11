import { UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const isFirstAccount = (await UserModel.countDocuments({})) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const { email } = req.body;
  const emailExists = await UserModel.count({ email });

  if (emailExists) {
    res.status(StatusCodes.FORBIDDEN).json({
      msg: "We already have user with that email address! Try another one!",
    });
    return;
  }
  // hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashPassword;

  const { confirmPassword, ...newUser } = req.body;

  const createdUser = await UserModel.create(newUser);

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "User successfully registered!" });
};

const login = async (req, res) => {
  res.send("This is LOGIN controller.");
};

const logout = async (req, res) => {
  res.send("This is LOGOUT controller.");
};

export { register, login, logout };
