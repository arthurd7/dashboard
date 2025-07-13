import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormDataContext } from "../../../contexts";
import { TagWrapper } from "../../../components";
import { v4 as uuidv4 } from "uuid";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../components";

const ProjectDocument = () => {
  const { projectId } = useParams();
  const [toDoTask, setToDoTask] = useState("");
  const [taskList, setTaskList] = useState(() => {
    const savedTaskList = localStorage.getItem(`taskList-${projectId}`);
    return savedTaskList ? JSON.parse(savedTaskList) : [];
  });
  const [isChecked, setIsChecked] = useState({});
  const { formData, setFormData } = useFormDataContext();
  const selectedProjectData = formData.find((p) => p.id === projectId);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnChange = (e) => {
    setToDoTask(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      if (toDoTask.length > 0) {
        setTaskList((prev) => [...prev, { id: uuidv4(), task: toDoTask }]);
        setToDoTask("");
      }
    }
  };

  const handleDeleteProject = (projectId) => {
    setFormData((prev) => prev.filter((item) => item.id !== projectId));
    localStorage.removeItem(`taskList-${projectId}`);
  };

  const handleDeleteTask = (todotaskId) => {
    setTaskList((prev) => prev.filter((item) => item.id !== todotaskId));
  };

  const handleCheckBox = (e, todotaskId) => {
    setIsChecked((prev) => ({
      ...prev,
      [todotaskId]: e.target.checked,
    }));
  };

  const handleModal = (isPopup) => {
    setIsModalOpen(isPopup);
  };

  useEffect(() => {
    if (projectId) {
      const savedTaskList = localStorage.getItem(`taskList-${projectId}`);
      setTaskList(savedTaskList ? JSON.parse(savedTaskList) : []);
    }
  }, [projectId]);

  useEffect(() => {
    if (projectId)
      localStorage.setItem(`taskList-${projectId}`, JSON.stringify(taskList));
  }, [taskList, projectId]);

  // add a fallback if selectedProject is undefined or null
  useEffect(() => {
    if (!selectedProjectData) {
      navigate("/dashboard/projects/create-project");
    }
  }, [selectedProjectData, navigate]);

  if (!selectedProjectData) {
    return null;
  }

  return (
    <div className="flex flex-col flex-1 h-[calc(100vh-80px)] overflow-y-auto border-t-3 border-r-3 border-[#393E46]">
      <div className="flex flex-col flex-1 gap-6 py-12 px-15">
        <div className="flex flex-row justify-between">
          <h1 className="text-5xl">{selectedProjectData.project_name}</h1>

          <button
            className="block text-white bg-red-700 px-5 py-2 border-3 border-solid border-black rounded-md cursor-pointer"
            type="button"
            onClick={() => handleModal(true)}
          >
            Delete
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            handleDeleteProject={() =>
              handleDeleteProject(selectedProjectData.id)
            }
          >
            <h1 className="text-xl">
              Are you sure you want to delete this project ?
            </h1>
            <p className="text-xl">{selectedProjectData.project_name}</p>
            <button
              type="button"
              className="bg-red-700 text-white py-2 px-10 rounded-md border-2 border-solid border-black cursor-pointer"
              onClick={() => handleDeleteProject(selectedProjectData.id)}
            >
              Delete
            </button>
          </Modal>
        </div>

        <TagWrapper>{selectedProjectData.starting_date}</TagWrapper>

        <TagWrapper>{selectedProjectData.author}</TagWrapper>

        <TagWrapper> {selectedProjectData.description}</TagWrapper>
      </div>

      <div className="flex flex-col flex-2 gap-3 border-t-3 py-12 px-15">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">To Do List</h1>

          <input
            type="text"
            value={toDoTask}
            className="w-[50%] border-2 border-sound border-gray-500 rounded-md p-1 focus:outline-none focus:border-gray-700 placeholder:opacity-50"
            maxLength={50}
            placeholder="Type something..."
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
          />
        </div>

        <ul className="flex flex-col gap-2">
          {taskList.map((todotask) => {
            return (
              <li
                key={todotask.id}
                className="flex justify-between items-center w-[70%] px-3 py-2 border-2 border-solid border-gray-500 rounded-md bg-white text-black"
              >
                <input
                  type="checkbox"
                  checked={!!isChecked[todotask.id]}
                  className="accent-red-700 w-[20px] h-[20px]"
                  onChange={(e) => handleCheckBox(e, todotask.id)}
                />
                <div
                  className={cx("flex items-center", {
                    ["line-through text-gray-500"]: !!isChecked[todotask.id],
                  })}
                >
                  {todotask.task}
                </div>

                <button
                  className="block cursor-pointer border-3 border-solid border-black rounded-md p-2 text-white bg-red-700"
                  type="button"
                  onClick={() => handleDeleteTask(todotask.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDocument;
