import { UserModel } from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const comparePassword = async (password, hashedPassword) => {
  const isMatched = await bcrypt.compare(password, hashedPassword);
  return isMatched;
};

// REGISTRATION
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

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;
  // find user
  const user = await UserModel.findOne({ email });
  // compare passwords
  const isValidUser = user && (await comparePassword(password, user.password));
  if (!isValidUser) {
    res.status(StatusCodes.FORBIDDEN).json({ msg: "User does not exists!" });
    return;
  }
  // create token
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  // send cookie
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("user_logged", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "Successfully login!" });
};

// LOGOUT
const logout = async (req, res) => {
  res.cookie("user_logged", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "User logged out!" });
};

export { register, login, logout };
