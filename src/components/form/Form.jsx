const formContainerStyle = "flex";

const formLabelStyle = "flex flex-1 font-medium text-xl";

const formInputStyle =
  "flex flex-2 border-2 border-solid border-gray-400 rounded-sm w-full p-1 placeholder-opacity-200 focus:outline-none focus:border-gray-700";

const formTextAreaStyle =
  "flex flex-2 border-2 border-solid border-gray-400 rounded-sm w-full p-1 h-25 focus:outline-none focus:border-stone-700 resize-none";

const Form = () => {
  return (
    <form
      className="bg-white text-gray-700 border-3 border-solid border-gray-700 rounded-md flex flex-col gap-6 p-4"
      action=""
      method=""
    >
      <div className={formContainerStyle}>
        <label className={formLabelStyle} htmlFor="project_name">
          Project Name:
        </label>
        <input
          className={formInputStyle}
          type="text"
          id="project_name"
          name="project_name"
          minLength={1}
          maxLength={50}
        />
      </div>

      <div className={formContainerStyle}>
        <label className={formLabelStyle} htmlFor="starting_date">
          Starting Date:
        </label>
        <input
          className={formInputStyle}
          type="date"
          id="starting_date"
          name="starting_date"
        />
      </div>

      <div className={formContainerStyle}>
        <label className={formLabelStyle} htmlFor="author_name">
          Author:
        </label>
        <input
          className={formInputStyle}
          type="text"
          id="author_name"
          name="author_name"
          minLength={1}
          maxLength={50}
        />
      </div>

      <div className={formContainerStyle}>
        <label className={formLabelStyle} htmlFor="description">
          Description:
        </label>
        <textarea
          className={formTextAreaStyle}
          id="description"
          name="description"
          minLength={1}
          maxLength={250}
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="font-medium border-2 border-solid border-gray-500 rounded-sm px-4 py-2 cursor-pointer transition duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
