import { Input, TextArea } from "../input-field";
import { useState } from "react";
import { useFormDataContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const formContainerStyle = "flex";

const formLabelStyle = "flex flex-1 font-medium text-xl pb-8";

const formDescriptionLabelStyle = "flex flex-1 font-medium text-xl pb-24";

const formInputStyle =
  "flex border-2 border-solid border-gray-500 rounded-sm w-full p-1 placeholder-opacity-200 focus:outline-none focus:border-gray-700 placeholder:opacity-50";

const formTextAreaStyle =
  "flex pb-4 border-2 border-solid border-gray-500 rounded-sm w-full p-1 h-25 focus:outline-none focus:border-gray-700 resize-none placeholder:opacity-50";

const Form = () => {
  const { setFormData } = useFormDataContext();
  const [inputValue, setInputValue] = useState({
    project_name: "",
    starting_date: "",
    author: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    // Check if there are any errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show the errors
      return; // Stop the form from submitting
    }

    // If no errors, clear old ones and save form data
    setErrors({}); // Clear previous errors
    const newFormValue = { id: uuidv4(), ...inputValue };
    setFormData((prev) => [...prev, newFormValue]);
    navigate(`/dashboard/projects/${newFormValue.id}`);
  };

  const validateForm = () => {
    const newErrors = {};
    const isValidDate = !isNaN(new Date(inputValue.starting_date).getTime());

    if (!inputValue.project_name.trim()) {
      newErrors.project_name = "Project Name is required";
    } else if (
      !(
        inputValue.project_name.length >= 1 &&
        inputValue.project_name.length <= 20
      )
    ) {
      newErrors.project_name = "between 1 to 20 characters";
    }
    if (!inputValue.starting_date.trim()) {
      newErrors.starting_date = "Starting Date is required";
    } else if (!isValidDate) {
      newErrors.starting_date = "Invalid date format";
    }

    if (!inputValue.author.trim()) {
      newErrors.author = "Author Name is required";
    } else if (
      !(inputValue.author.length >= 1 && inputValue.author.length <= 50)
    ) {
      newErrors.author = "between 1 to 50 characters";
    }

    if (!inputValue.description.trim()) {
      newErrors.description = "Description is required";
    } else if (
      !(
        inputValue.description.length >= 1 &&
        inputValue.description.length <= 120
      )
    ) {
      newErrors.description = "between 1 to 120 characters";
    }

    return newErrors;
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="bg-white text-gray-700 border-3 border-solid border-gray-700 rounded-md flex flex-col gap-6 p-4"
      action=""
      method=""
    >
      <Input
        label="Project Name:"
        name="project_name"
        value={inputValue.project_name}
        type="text"
        minLength={1}
        maxLength={20}
        placeholder="Project X..."
        containerStyle={formContainerStyle}
        labelStyle={formLabelStyle}
        inputStyle={formInputStyle}
        onChange={handleOnChange}
        error={errors.project_name}
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
        error={errors.starting_date}
      />

      <Input
        label="Author:"
        name="author"
        value={inputValue.author}
        type="text"
        minLength={1}
        maxLength={50}
        placeholder="Arthur Dai..."
        containerStyle={formContainerStyle}
        labelStyle={formLabelStyle}
        inputStyle={formInputStyle}
        onChange={handleOnChange}
        error={errors.author}
      />

      <TextArea
        label="Description:"
        name="description"
        value={inputValue.description}
        minLength={1}
        maxLength={120}
        placeholder="This is my first project..."
        containerStyle={formContainerStyle}
        labelStyle={formDescriptionLabelStyle}
        textAreaStyle={formTextAreaStyle}
        onChange={handleOnChange}
        error={errors.description}
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
