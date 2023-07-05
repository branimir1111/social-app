import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-[#333333] w-[600px] h-3/6 rounded-[5px] grid justify-center items-end py-8 max-sm:w-11/12  max-sm:h-4/6">
        <div className="text-[3rem] mx-auto">🕸️</div>
        <h1 className="text-[3rem] text-white text-center">
          {" "}
          Spider <span className="text-[#2CB1BC]">Web</span> App
        </h1>
        <div className=" mx-auto w-5/6 flex justify-center gap-4 max-sm:flex-col max-sm:items-center">
          <Link to="register" className=" max-sm:w-full">
            <button
              type="button"
              className=" max-sm:w-full bg-[#2CB1BC] p-[8px] rounded-[5px] text-lg hover:bg-[#0E7C86] text-white transition-all duration-300"
            >
              Register
            </button>
          </Link>
          <Link to="login" className=" max-sm:w-full">
            <button
              type="button"
              className=" max-sm:w-full bg-[#2CB1BC] p-[8px] rounded-[5px] text-lg hover:bg-[#0E7C86] text-white transition-all duration-300"
            >
              Login / DemoUser
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
