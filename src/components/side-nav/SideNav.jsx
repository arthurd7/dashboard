import { Link } from "react-router-dom";

const linkCSS =
  "bg-[#393E46] text-white p-3 rounded-md hover:bg-white hover:text-black transition duration-300";

const SideNav = () => {
  return (
    <nav className="flex flex-row bg-[#00ADB5]">
      {/* this is basically <a></a> */}
      <div className="flex bg-[#FFFDD0] w-3xs gap-3 p-4">
        <Link className={linkCSS} to={"/dashboard"}>
          Introduction
        </Link>
        <Link className={linkCSS} to={"/dashboard/projects"}>
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
