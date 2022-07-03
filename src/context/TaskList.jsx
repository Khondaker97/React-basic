import { createContext, useReducer } from "react";
//reducer
import { taskListReducer } from "../reducers/taskList";

export const TaskListContext = createContext();

const TaskListProvider = ({ children }) => {
  const [taskLists, dispatchTaskList] = useReducer(taskListReducer, []);

  return (
    <TaskListContext.Provider value={{ taskLists, dispatchTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};
export default TaskListProvider;
