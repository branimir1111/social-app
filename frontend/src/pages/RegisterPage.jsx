import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] bg-[#333333] rounded-[5px] p-[15px] text-white">
        {/* logo */}
        <div className="text-[3rem] text-center">
          <Link to="/">🕸️</Link>
        </div>
        {/* title  */}
        <h1 className="text-[2rem] text-white text-center">Register</h1>
        {/* single form row */}
        <form>
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full rounded-[3px] p-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full rounded-[3px] p-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">Email</label>
            <input
              type="email"
              name="email"
              className="w-full rounded-[3px] p-[3px] bg-[#5a5a5a]"
            />
          </div>
          {/* single form row */}
          <div className="mt-[10px] flex flex-col gap-2">
            <label className="">Password</label>
            <input
              type="password"
              name="password"
              className="w-full rounded-[3px] p-[3px] bg-[#5a5a5a]"
            />
          </div>
        </form>
        <div className="w-full flex place-content-center mt-4">
          Already have an account ?{" "}
          <Link to="/login" className="pl-[5px] text-indigo-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
