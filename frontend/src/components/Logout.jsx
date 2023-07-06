import avatar from "../images/avatar.svg";

const Logout = () => {
  return (
    <div className="hidden  md:flex md:gap-5">
      <div className="w-[50px] h-[50px] rounded-full bg-orange-100 border-2 border-orange-400">
        <img src={avatar} alt="profile-picture" />
      </div>
      <button
        type="button"
        className="px-5 py-3 text-white bg-orange-300 hover:bg-orange-400 transition-all duration-300 rounded-[3px]"
      >
        Logout
      </button>
    </div>
  );
};
export default Logout;
