import { Input, TextArea } from "../input-field";
import { useState } from "react";
import { useFormDataContext } from "../../contexts";
import { v4 as uuidv4 } from "uuid";

const formContainerStyle = "flex";

const formLabelStyle = "flex flex-1 font-medium text-xl";

const formInputStyle =
  "flex flex-2 border-2 border-solid border-gray-400 rounded-sm w-full p-1 placeholder-opacity-200 focus:outline-none focus:border-gray-700";

const formTextAreaStyle =
  "flex flex-2 border-2 border-solid border-gray-400 rounded-sm w-full p-1 h-25 focus:outline-none focus:border-gray-700 resize-none";

const Form = () => {
  const { setFormData } = useFormDataContext();
  const [inputValue, setInputValue] = useState({
    project_name: "",
    starting_date: "",
    author: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newFormValue = { id: uuidv4(), ...inputValue };
    setFormData((prev) => [...prev, newFormValue]);
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="bg-white text-gray-700 border-3 border-solid border-gray-700 rounded-md flex flex-col gap-6 p-4"
      action=""
      method=""
    >
      {/* <h1>{tracking}</h1> */}
      <Input
        label="Project Name:"
        name="project_name"
        value={inputValue.project_name}
        type="text"
        minLength={1}
        maxLength={20}
        containerStyle={formContainerStyle}
        labelStyle={formLabelStyle}
        inputStyle={formInputStyle}
        onChange={handleOnChange}
      />

      <Input
        label="Starting Date:"
        name="starting_date"
        value={inputValue.starting_date}
        type="date"
        containerStyle={formContainerStyle}
        labelStyle={formLabelStyle}
        inputStyle={formInputStyle}
        onChange={handleOnChange}
      />

      <Input
        label="Author:"
        name="author"
        value={inputValue.author}
        type="text"
        minLength={1}
        maxLength={50}
        containerStyle={formContainerStyle}
        labelStyle={formLabelStyle}
        inputStyle={formInputStyle}
        onChange={handleOnChange}
      />

      <TextArea
        label="Description:"
        name="description"
        value={inputValue.description}
        minLength={1}
        maxLength={250}
        containerStyle={formContainerStyle}
        labelStyle={formLabelStyle}
        textAreaStyle={formTextAreaStyle}
        onChange={handleOnChange}
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="block font-medium border-2 border-solid border-gray-500 rounded-sm px-4 py-2 cursor-pointer transition duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
