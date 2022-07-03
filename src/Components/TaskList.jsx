import React, { useState, useContext } from "react";
//import components
import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";
import TaskCard from "./TaskCard";
//import contexts
import { TaskContext } from "../context/Task";
import { TaskListContext } from "../context/TaskList";
import { BoardContext } from "../context/Board";
import styled from "styled-components";
//import action types
import {
  ADD_TASK_ID_TO_BOARD,
  ADD_TASK_ID_TO_LIST,
  CREATE_TASK,
  DELETE_LIST,
  REMOVE_LIST_ID_FROM_BOARD,
} from "../utils/constants";

const TaskList = ({ taskList }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { tasks: allTasks, dispatchTask } = useContext(TaskContext);
  const { dispatchTaskList } = useContext(TaskListContext);
  const { dispatchBoard } = useContext(BoardContext);

  const submitHandler = () => {
    const id = Date.now();
    dispatchTask({
      type: CREATE_TASK,
      payload: {
        id: id,
        title: taskTitle,
        taskListId: taskList.id,
        boardId: taskList.boardId,
      },
    });
    dispatchTaskList({
      type: ADD_TASK_ID_TO_LIST,
      payload: { id: taskList.id, taskId: id },
    });

    dispatchBoard({
      type: ADD_TASK_ID_TO_BOARD,
      payload: { id: taskList.boardId, taskId: id },
    });
    setTaskTitle("");
    setEditMode(false);
  };

  const removeListHandler = () => {
    dispatchTaskList({ type: DELETE_LIST, payload: { id: taskList.id } });
    dispatchBoard({
      type: REMOVE_LIST_ID_FROM_BOARD,
      payload: { id: taskList.boardId, listId: taskList.id },
    });
  };
  return (
    <ListContainer>
      <ListInfo>
        <h5>{taskList.title}</h5>
        <span
          style={{ padding: "5px", cursor: "pointer" }}
          onClick={removeListHandler}
        >
          x
        </span>
      </ListInfo>
      {taskList?.tasks
        .map((item) => allTasks.find((i) => i.id === item))
        ?.map((task, index) => (
          <TaskCard
            index={index}
            id={task.id}
            taskList={taskList}
            task={task}
            key={task.id}
          />
        ))}
      {!editMode ? (
        <AddItem setEditMode={setEditMode} hint="Add a task" />
      ) : (
        <AddItemForm
          submitHandler={submitHandler}
          setEditMode={setEditMode}
          title={taskTitle}
          hint="Add task"
          onChangeHandler={(e) => setTaskTitle(e.target.value)}
        />
      )}
    </ListContainer>
  );
};

export default TaskList;
const ListContainer = styled.div`
  min-height: 180px;
  display: flex;
  flex-direction: column;
  color: #000;
  background-color: #96bbeb;
  border: 1px solid rgba(206, 255, 214, 0.7);
  border-radius: 8px;
  margin-top: 20px;
  padding: 10px 15px;
`;
const ListInfo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
