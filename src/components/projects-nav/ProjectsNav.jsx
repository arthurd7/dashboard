import { Link } from "react-router-dom";
import { useFormDataContext } from "../../contexts";

const ProjectsNav = () => {
  const { formData } = useFormDataContext();

  return (
    <nav className="bg-[#393E46] h-[calc(100vh-80px)] text-white flex flex-col gap-10 w-3xs text-base p-6 overflow-y-auto">
      <ul className="flex flex-col gap-4">
        <li className="flex bg-white text-black rounded-md">
          <Link
            className="flex justify-center w-full p-2"
            to={"/projects/create-project"}
          >
            Create Project +
          </Link>
        </li>
        <li className="flex bg-white text-black rounded-md">
          <Link
            className="flex justify-center w-full p-2"
            to={"/projects/personal-projects"}
          >
            Projects
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4">
        <h1 className="text-sm border-b-1 border-solid border-gray-300 pb-1">
          Your Projects
        </h1>
        {formData.map((data) => {
          console.log(data.id);
          return (
            <li key={data.id} className="flex bg-white text-black rounded-md">
              <Link
                className="flex justify-center w-full p-2"
                to={`/projects/${data.id}`}
              >
                {data.project_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ProjectsNav;
