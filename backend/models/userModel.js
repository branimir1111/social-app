import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: [true, "First name is required!"] },
    lastName: { type: String, required: [true, "Last name is required!"] },
    email: { type: String, required: [true, "Email is required!"] },
    password: { type: String, required: [true, "Password is required!"] },
    gender: { type: String, required: [true, "Gender is required!"] },
    image: { type: String, default: null },
    birthDate: { type: Date, default: null },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

const UserModel = model("users", UserSchema);
export { UserModel };
