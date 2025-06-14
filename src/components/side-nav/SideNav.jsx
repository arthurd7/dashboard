import { Link } from "react-router-dom";

const linkCSS =
  "bg-gray-500 text-white p-2 rounded-md hover:bg-white hover:text-gray-500 transition duration-300";

const SideNav = () => {
  return (
    <nav className="flex flex-row bg-teal-500">
      {/* this is basically <a></a> */}
      <div className="flex w-[50%] justify-around bg-[#FFFDD0] p-4">
        <Link className={linkCSS} to={"/dashboard"}>
          Introduction
        </Link>
        <br />
        <Link className={linkCSS} to={"/dashboard/projects"}>
          Projects
        </Link>
        <br />
        <Link className={linkCSS} to={"/dashboard/profile"}>
          Profile
        </Link>
        <br />
        <Link className={linkCSS} to={"/dashboard/settings"}>
          Settings
        </Link>
        <br />
      </div>
    </nav>
  );
};

export default SideNav;
