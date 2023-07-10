import { Link, useRouteError } from "react-router-dom";
import image from "../images/not-found.svg";

const ErrorPage = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className="min-w-sceer min-h-screen grid place-content-center ">
        <div className="flex-col justify-center max-md:w-3/4 max-md:mx-auto md:w-[600px]">
          <img src={image} alt="not found img" />
          <h3 className="text-center mt-8 mb-2 max-md:text-xl md:text-2xl">
            This page is not found!
          </h3>

          <Link to="/main/home ">
            <h3 className="text-center bg-slate-300 py-2 rounded-[5px] text-white hover:bg-slate-400 transition-all duration-300 md:w-2/4 md:mx-auto">
              Back home
            </h3>
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="min-w-screen min-h-screen grid place-content-center">
      <h1 className="text-4xl mb-4 max-md:text-2xl">Something went wrong!</h1>
      <Link to="/main/home">
        <h1 className=" bg-slate-300 rounded-[5px] py-[10px] text-xl text-center text-white hover:bg-slate-400  transition-all duration-300 cursor-pointer">
          Back home
        </h1>
      </Link>
    </main>
  );
};
export default ErrorPage;
