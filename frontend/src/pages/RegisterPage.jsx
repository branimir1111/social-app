import { Link } from "react-router-dom";
import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  const [viewPass, setViewPass] = useState(true);
  const [viewConfPass, setViewConfPass] = useState(true);

  const handleViewPass = () => {
    return setViewPass(!viewPass);
  };
  const handleViewConfPass = () => {
    return setViewConfPass(!viewConfPass);
  };

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .required("Required")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
    gender: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
    birthDate: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      image: "",
      birthDate: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      toast.success("Submit is OK!");
      formik.resetForm();
    },
  });

  const showError = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div className="w-full h-full max-md:py-2 md:py-4 flex justify-center items-center">
      <div className="w-[400px] bg-[#333333] rounded-[5px] p-[15px] text-white  max-md:w-11/12">
        {/* logo */}
        <div className="text-[3rem] text-center">
          <Link to="/">🕸️</Link>
        </div>
        {/* title  */}
        <h1 className="text-[2rem] text-violet-400 text-center">Register</h1>
        {/* single form row */}
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">
              First Name{" "}
              <span className="text-pink-500 italic text-sm">
                {showError("firstName")}
              </span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="Enter first name"
              className="w-full rounded-[3px] px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">
              Last Name{" "}
              <span className="text-pink-500 italic text-sm">
                {showError("lastName")}
              </span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Enter last name"
              className="w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label>
              Email{" "}
              <span className="text-pink-500 italic text-sm">
                {showError("email")}
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
              className="w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="relative mt-[10px] flex flex-col gap-2">
            <label>
              Password{" "}
              <span className="text-pink-500 italic text-sm">
                {showError("password")}
              </span>
            </label>
            <input
              type={`${viewPass ? "password" : "text"}`}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter password"
              className="w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
            <button
              className="absolute text-[20px] bottom-[5px] right-3 cursor-pointer  hover:text-violet-300 hover:transition-all hover:duration-300"
              onClick={handleViewPass}
            >
              {viewPass ? <PiEyeBold /> : <PiEyeClosedBold />}
            </button>
          </div>
          {/* single form row */}
          <div className="relative mt-[10px] flex flex-col gap-2">
            <label>
              Confirm Password{" "}
              <span className="text-pink-500 italic text-sm">
                {showError("confirmPassword")}
              </span>
            </label>
            <input
              type={`${viewConfPass ? "password" : "text"}`}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirm password"
              className="w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
            <button
              className="absolute text-[20px] bottom-[5px] right-3 cursor-pointer  hover:text-violet-300 hover:transition-all hover:duration-300"
              onClick={handleViewConfPass}
            >
              {viewConfPass ? <PiEyeBold /> : <PiEyeClosedBold />}
            </button>
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label>
              Gender{" "}
              <span className="text-pink-500 italic text-sm">
                {showError("gender")}
              </span>
            </label>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              className="w-full rounded-[3px]  px-[5px] py-[5px] bg-[#5a5a5a]"
            >
              <option value="" defaultChecked>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label>
              Image{" "}
              <span className="text-pink-500 italic text-sm">
                {showError("image")}
              </span>
            </label>
            <input
              type="file"
              name="image"
              onChange={(e) =>
                formik.setFieldValue(e.target.name, e.target.files[0])
              }
              className="cursor-pointer w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label>
              Birth Date{" "}
              <span className="text-pink-500 italic text-sm">
                {showError("birthDate")}
              </span>
            </label>
            <input
              type="date"
              name="birthDate"
              value={formik.values.birthDate}
              onChange={formik.handleChange}
              className="cursor-pointer w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[15px] flex">
            <button
              type="submit"
              className="cursor-pointer w-full rounded-[3px] px-[3px] py-2 bg-violet-400 hover:bg-violet-500 transition-all duration-300 uppercase tracking-widest"
            >
              Register
            </button>
          </div>
        </form>
        <div className="w-full flex justify-center items-center mt-4 max-md:flex max-md:flex-col">
          <div>Already have an account ?</div>{" "}
          <div>
            <Link
              to="/login"
              className="pl-[5px] text-violet-300 hover:text-violet-400 transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
