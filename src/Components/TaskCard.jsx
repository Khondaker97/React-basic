import React, { useState, useContext } from "react";
//components
import AddItemForm from "./AddItemForm";
//css
import styled from "styled-components";
//reducer context
import { TaskContext } from "../context/Task";
import { TaskListContext } from "../context/TaskList";
import { BoardContext } from "../context/Board";
//action types
import {
  DELETE_TASK,
  REMOVE_TASK_ID_FROM_BOARD,
  REMOVE_TASK_ID_FROM_LIST,
  UPDATE_TASK,
} from "../utils/constants";

const TaskCard = ({ task, index }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);
  const { dispatchTask } = useContext(TaskContext);
  const { dispatchTaskList } = useContext(TaskListContext);
  const { dispatchBoard } = useContext(BoardContext);

  const submitHandler = () => {
    dispatchTask({
      type: UPDATE_TASK,
      payload: { id: task.id, title: taskTitle },
    });
    setEditMode(false);
  };

  const removeTaskHandler = () => {
    dispatchTask({ type: DELETE_TASK, payload: { id: task.id } });
    dispatchTaskList({
      type: REMOVE_TASK_ID_FROM_LIST,
      payload: { id: task.taskListId, taskId: task.id },
    });
    dispatchBoard({
      type: REMOVE_TASK_ID_FROM_BOARD,
      payload: { id: task.boardId, taskId: task.id },
    });
  };
  return (
    <CardContainer>
      {editMode ? (
        <AddItemForm
          onChangeHandler={(e) => setTaskTitle(e.target.value)}
          title={taskTitle}
          setEditMode={setEditMode}
          submitHandler={submitHandler}
          hint="Update task"
        />
      ) : (
        <div
          onClick={(e) => {
            setEditMode(true);
          }}
        >
          <p>{taskTitle}</p>
          <span
            style={{ padding: "5px", cursor: "pointer" }}
            onClick={removeTaskHandler}
          >
            x
          </span>
        </div>
      )}
    </CardContainer>
  );
};

export default TaskCard;

const CardContainer = styled.div``;
