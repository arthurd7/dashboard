import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] justify-center items-center border-x-3 border-t-3 border-[#393E46] py-13 px-15">
      <div className="flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">Just A Dashboard</h1>
          <p className="text-xl">
            This dashboard allows users to create and manage project pages to
            keep track of completed tasks efficiently.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">Features -</h2>
          <ul className="list-disc list-inside leading-10 text-md pl-5">
            <li>
              Create a new project page with:
              <ul className="list-disc list-inside leading-10 pl-10">
                <li>Project Name</li>
                <li>Author Name</li>
                <li>Description</li>
                <li>Starting Date</li>
              </ul>
            </li>
            <li>Add tasks to your project</li>
            <li>
              Delete and remove projects and tasks that are no longer needed
            </li>
            <li>Track what tasks you’ve completed per project</li>
          </ul>
          <div className="flex justify-center">
            <Link
              className="font-medium border-2 border-solid border-gray-500 rounded-sm px-4 py-2 cursor-pointer transition duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
              to={"/projects"}
            >
              Let's get started
            </Link>
          </div>

          <div className="flex justify-end">
            <h3>Created by Arthur Dai</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
