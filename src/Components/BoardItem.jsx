import React, { useContext } from "react";
import { BoardContext } from "../context/Board";
import { TaskListContext } from "../context/TaskList";
import { TaskContext } from "../context/Task";
import { DELETE_BOARD, DELETE_LIST, DELETE_TASK } from "../utils/constants";
import styled from "styled-components";

const BoardItem = ({ board }) => {
  const { dispatchBoard } = useContext(BoardContext);
  const { taskLists, dispatchTaskList } = useContext(TaskListContext);
  const { tasks, dispatchTask } = useContext(TaskContext);

  const removeBoardHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const listsTobeDeleted = taskLists.filter(
      (list) => list.boardId === board.id
    );
    const tasksTobeDeleted = tasks.filter((task) => task.boardId === board.id);
    dispatchBoard({ type: DELETE_BOARD, payload: { id: board.id } });
    listsTobeDeleted.forEach((list) => {
      dispatchTaskList({ type: DELETE_LIST, payload: { id: list.id } });
    });
    tasksTobeDeleted.forEach((task) => {
      dispatchTask({ type: DELETE_TASK, payload: { id: task.id } });
    });
  };
  return (
    <BoardInfo>
      <BoardTitle>
        <h5>{board.title}</h5>
        <span style={{ padding: "5px" }} onClick={removeBoardHandler}>
          x
        </span>
      </BoardTitle>
      <p>This board has {board.taskLists.length} List.</p>
    </BoardInfo>
  );
};

export default BoardItem;

const BoardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 180px;
  color: #000;
  background-color: #96bbeb;
  border: 1px solid rgba(206, 255, 214, 0.7);
  border-radius: 8px;
  margin-top: 20px;
  padding: 10px 15px;
`;
const BoardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;
