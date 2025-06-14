import { Form } from "../../../components";

const CreateProject = () => {
  return (
    <div className="flex-1 flex flex-col p-15 gap-6">
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
