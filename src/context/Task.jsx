import { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/task";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, dispatchTask] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatchTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;
