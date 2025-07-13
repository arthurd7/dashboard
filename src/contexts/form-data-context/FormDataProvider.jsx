import { useState, useEffect } from "react";
import { FormDataContext } from "./FormDataContext";

export const FormDataProvider = ({ children }) => {
  // preset the initial value of formData, getting the saved data from localStorage
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData ? JSON.parse(savedFormData) : [];
  });

  // save the latest formData, every time formData changes (including inital render)
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
