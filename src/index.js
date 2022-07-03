import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//contexts
import BoardProvider from "./context/Board";
import TaskListProvider from "./context/TaskList";
import TaskProvider from "./context/Task";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BoardProvider>
    <TaskListProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </TaskListProvider>
  </BoardProvider>
);
