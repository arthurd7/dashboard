import { useContext } from "react";
import { FormDataContext } from "./FormDataContext";

export const useFormDataContext = () => useContext(FormDataContext);
