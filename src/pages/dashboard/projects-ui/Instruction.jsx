import { Link } from "react-router-dom";

const Instruction = () => {
  return (
    <div className="flex-1 flex flex-col p-15 gap-12 border-r-3 border-[#393E46]">
      <div className="flex justify-center mt-8">
        <h1 className="text-3xl border-b-3 font-bold">
          Welcome to your Project Dashboard
        </h1>
      </div>

      <div className="flex justify-center">
        <ul className="flex flex-col items-flex-start list-disc list-inside leading-10">
          <li>Click the "Create Project" button</li>
          <li> Fill in the project name, description, and start date</li>
          <li>Once created, you can start adding tasks</li>
          <li> Mark tasks as complete or delete them as needed</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Link
          to={"/dashboard/projects/create-project"}
          className="font-medium border-2 border-solid border-gray-500 rounded-sm px-4 py-2 cursor-pointer transition duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
        >
          Create Project +
        </Link>
      </div>
    </div>
  );
};

export default Instruction;
