import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center bg-[#333333]">
      <Navbar />
      <Outlet />
    </main>
  );
};
export default SharedLayout;
