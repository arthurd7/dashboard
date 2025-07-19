import { useFormDataContext } from "../../../contexts";
import { Link } from "react-router-dom";

const MoreProject = () => {
  const { formData } = useFormDataContext();

  return (
    <div className="w-[calc(1200px-256px)] overflow-y-auto border-t-3 border-r-3 border-[#393E46]">
      <div className="flex flex-col gap-10 p-15  h-[calc(100vh-80px)]">
        <h1 className="text-3xl">List of Projects</h1>

        <div className="flex flex-wrap gap-5">
          {formData.map((data) => {
            return (
              <Link
                to={`/projects/${data.id}`}
                className="flex flex-col gap-3 border-2 border-solid border-black rounded-md p-5"
                key={data.id}
              >
                <h1 className="text-4xl text-center">{data.project_name}</h1>
                <p>Author: {data.author}</p>
                <p>Starting Date: {data.starting_date}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoreProject;
