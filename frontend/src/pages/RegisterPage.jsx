import { Link } from "react-router-dom";
import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const RegisterPage = () => {
  const [viewPass, setViewPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleViewPass = () => {
    return setViewPass(!viewPass);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] bg-[#333333] rounded-[5px] p-[15px] text-white  max-md:w-11/12">
        {/* logo */}
        <div className="text-[3rem] text-center">
          <Link to="/">🕸️</Link>
        </div>
        {/* title  */}
        <h1 className="text-[2rem] text-violet-400 text-center">Register</h1>
        {/* single form row */}
        <form onSubmit={handleSubmit}>
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              className="w-full rounded-[3px] px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              className="w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="relative mt-[10px] flex flex-col gap-2">
            <label>Password</label>
            <input
              type={`${viewPass ? "password" : "text"}`}
              name="password"
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
          <div className="mt-[10px] flex flex-col gap-2">
            <label>Gender</label>
            <select
              name="gender"
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
            <label>Image</label>
            <input
              type="file"
              name="image"
              className="cursor-pointer w-full rounded-[3px]  px-[5px] py-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label>Birth Date</label>
            <input
              type="date"
              name="birthDate"
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
