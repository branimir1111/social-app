import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main className="min-w-screen min-h-content flex flex-col items-center bg-[#333333]">
      <Navbar />
      <Outlet />
    </main>
  );
};
export default SharedLayout;
