import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StudentProvider from "./context/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentProvider>
      <App />
    </StudentProvider>
  </React.StrictMode>
);
