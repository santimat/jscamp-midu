// strcitMode is only for development
import { StrictMode } from "react";
// import createRoot from reactDOM to assign our root element
import { createRoot } from "react-dom/client";
import "@css/index.css";
import App from "@/App.jsx";

// create a root element and render the content
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
