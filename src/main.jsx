import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // global css
import App from "./App";
import { FormDataProvider } from "./contexts/form-data-context/FormDataProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormDataProvider>
      <App />
    </FormDataProvider>
  </StrictMode>
);
