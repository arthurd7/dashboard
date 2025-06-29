import { useState } from "react";
import { FormDataContext } from "./FormDataContext";

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
