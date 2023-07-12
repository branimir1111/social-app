import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "http://localhost:4000/api/v1";

const LoginPage = () => {
  const [viewPass, setViewPass] = useState(true);
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${baseUrl}/auth/login`, values);
        if (response.status === 200) {
          toast.success(`${response.data.msg}`);
          setTimeout(() => {
            navigate("/main");
          }, 2000);
        } else {
          toast.error("Login failed!");
        }
      } catch (error) {
        toast.error(`${error.response.data.msg}`);
      }

      formik.resetForm();
    },
  });

  const handleViewPass = () => {
    return setViewPass(!viewPass);
  };

  const showError = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] bg-[#333333] rounded-[5px] p-[15px] text-white max-md:w-11/12">
        {/* logo */}
        <div className="text-[3rem] text-center">
          <Link to="/">🕸️</Link>
        </div>
        {/* title  */}
        <h1 className="text-[2rem] text-violet-400 text-center">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">
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
              className="w-full rounded-[3px] px-[5px] py-[5px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="relative mt-[10px] flex flex-col gap-2">
            <label className="">
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
              className="w-full rounded-[3px] px-[5px] py-[5px] bg-[#5a5a5a]"
            />
            <button
              type="button"
              className="absolute text-[20px] bottom-[5px] right-3 cursor-pointer hover:text-violet-300 hover:transition-all hover:duration-300"
              onClick={handleViewPass}
            >
              {viewPass ? <PiEyeBold /> : <PiEyeClosedBold />}
            </button>
          </div>
          {/* single form row */}
          <div className="mt-8 flex flex-col gap-4">
            <button
              type="submit"
              className="cursor-pointer w-full rounded-[3px] px-[3px] py-2 bg-violet-400 hover:bg-violet-500 transition-all duration-300 uppercase tracking-widest"
            >
              Login
            </button>
            <h1 className="w-full flex place-content-center">OR</h1>
            <div className="flex  gap-4 max-md:flex-col">
              <button
                type="submit"
                className="cursor-pointer w-full rounded-[3px] px-[3px] py-2 bg-violet-500 hover:bg-violet-400 transition-all duration-300 capitalize tracking-widest"
              >
                Demo Admin
              </button>
              <button
                type="submit"
                className="cursor-pointer w-full rounded-[3px] px-[3px] py-2 bg-violet-500 hover:bg-violet-400 transition-all duration-300 capitalize tracking-widest"
              >
                Demo User
              </button>
            </div>
          </div>
        </form>
        <div className="w-full flex justify-center items-center mt-4 max-md:flex max-md:flex-col">
          <div>You don't have an account ?</div>{" "}
          <div>
            <Link
              to="/register"
              className="pl-[5px] text-violet-300 hover:text-violet-400 transition-all duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
