import { Form } from "../../../components";

const CreateProject = () => {
  return (
    <div className="flex flex-col w-[calc(1200px-256px)] max-w-[calc(1200px-256px)] p-15 gap-6 border-r-3 border-[#393E46]">
      <div>
        <h1 className="text-3xl">Create Project</h1>
      </div>
      <div className="self-center w-4/5">
        <Form />
      </div>
    </div>
  );
};

export default CreateProject;
