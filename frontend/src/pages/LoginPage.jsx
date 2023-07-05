import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] bg-[#333333] rounded-[5px] p-[15px] text-white">
        {/* logo */}
        <div className="text-[3rem] text-center">
          <Link to="/">🕸️</Link>
        </div>
        {/* title  */}
        <h1 className="text-[2rem] text-white text-center">Login</h1>
        <form>
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
          You don't have an account ?{" "}
          <Link to="/register" className="pl-[5px] text-indigo-300">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
