import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main className="w-screen flex-col justify-center items-center bg-white">
      <Navbar />
      <Outlet />
    </main>
  );
};
export default SharedLayout;
//bg-[#333333]
