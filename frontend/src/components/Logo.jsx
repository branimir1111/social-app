import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="w-max flex">
      <Link to="/main" className="text-3xl max-md:text-2xl text-white">
        🕸️ <span className="max-md:text-xl"></span> Spider{" "}
        <span className="text-violet-500">Web</span>
      </Link>
    </div>
  );
};
export default Logo;
