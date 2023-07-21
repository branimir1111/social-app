import { NavLink } from "react-router-dom";
import { mainLinks } from "../utils/mainLinks";
import Logo from "../components/Logo";
import Logout from "../components/Logout";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center items-center py-4 bg-[#3F3F3F]">
      <section className="w-[1280px] flex px-4 max-xl:w-11/12 justify-between items-center  ">
        <Logo />
        <div id="mainLinks" className="hidden md:flex text-xl text-white">
          {mainLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <NavLink
                key={id}
                to={url}
                className="navbar_link mx-3 tracking-widest hover:text-violet-300 transition-all duration-200"
              end>
                {text}
              </NavLink>
            );
          })}
        </div>
        <Logout />
        <button className="text-3xl md:hidden focus:outline-none text-white">
          &#9776;
        </button>
      </section>
    </nav>
  );
};
export default Navbar;
//
