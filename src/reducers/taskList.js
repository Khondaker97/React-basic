import {
  ADD_TASK_ID_TO_LIST,
  CHANGE_BOARD_ID_OF_LIST,
  CREATE_LIST,
  DELETE_LIST,
  REMOVE_TASK_ID_FROM_LIST,
  UPDATE_LIST,
} from "../utils/constants";

export const taskListReducer = (taskLists, action) => {
  switch (action.type) {
    case CREATE_LIST: {
      const taskList = {
        id: action.payload.id,
        title: action.payload.title,
        tasks: [],
        boardId: action.payload.boardId,
      };
      console.log(taskList);
      return [...taskLists, taskList];
    }
    case UPDATE_LIST: {
      return taskLists.map((taskList) => {
        if (taskList.id === action.payload.id) {
          taskList.title = action.payload.title || taskList.title;
        }
        return taskList;
      });
    }
    case DELETE_LIST: {
      return taskLists.filter((taskList) => taskList.id !== action.payload.id);
    }
    case ADD_TASK_ID_TO_LIST: {
      return taskLists.map((taskList) => {
        if (taskList.id === action.payload.id) {
          taskList.tasks.push(action.payload.taskId);
        }
        return taskList;
      });
    }
    case REMOVE_TASK_ID_FROM_LIST: {
      return taskLists.map((taskList) => {
        if (taskList.id === action.payload.id) {
          taskList.tasks = taskList.tasks.filter(
            (task) => task.id !== action.payload.taskId
          );
        }
        return taskList;
      });
    }
    case CHANGE_BOARD_ID_OF_LIST: {
      return taskLists.map((taskList) => {
        if (taskList.id === action.payload.id) {
          taskList.boardId = action.payload.boardId;
        }
        return taskList;
      });
    }
    default: {
      return taskLists;
    }
  }
};
