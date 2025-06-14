import { Link } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <nav className="bg-[#393E46] h-[calc(100vh-72px)] text-white flex flex-col w-3xs text-base p-6 overflow-y-auto">
      <ul className="flex flex-col gap-3">
        <li className="flex justify-center bg-white text-black p-2 rounded-md">
          <Link to={"/dashboard/projects/create-project"}>
            Create Project +
          </Link>
        </li>
        <li className="flex justify-center bg-white text-black p-2 rounded-md">
          <Link to={"/dashboard/projects/more-projects"}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectsNav;
