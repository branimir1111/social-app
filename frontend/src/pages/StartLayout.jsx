import { Outlet } from "react-router-dom";

const StartLayout = () => {
  return (
    <main className="w-screen h-screen flex place-content-center bg-violet-100 font-fontInter">
      <Outlet />
    </main>
  );
};
export default StartLayout;
