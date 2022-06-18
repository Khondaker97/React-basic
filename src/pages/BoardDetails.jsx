import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import AddItem from "../Components/AddItem";
import AddItemForm from "../Components/AddItemForm";
import TaskList from "../Components/TaskList";

import { BoardContext } from "../context/Board";
// import { TaskContext } from "../context/Task";
import { TaskListContext } from "../context/TaskList";
import { ADD_LIST_ID_TO_BOARD, CREATE_LIST } from "../utils/constants";

const BoardDetails = () => {
  const [listTitle, setListTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const { boardId } = useParams();

  const { taskLists, dispatchTaskList } = useContext(TaskListContext);
  const { dispatchBoard } = useContext(BoardContext);
  // const { dispatchTask } = useContext(TaskContext);

  const submitHandler = () => {
    const id = Date.now();
    dispatchTaskList({
      type: CREATE_LIST,
      payload: { id: id, boardId: boardId, title: listTitle },
    });
    dispatchBoard({
      type: ADD_LIST_ID_TO_BOARD,
      payload: { id: boardId, taskListId: id },
    });

    setListTitle("");
    setEditMode(false);
  };
  return (
    <DetailsContainer>
      <Link to="/">
        <BackToBoard>Back To Boards</BackToBoard>
      </Link>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          height: "100%",
        }}
      >
        {taskLists
          ?.filter((item) => item.boardId === boardId)
          ?.map((taskList) => (
            <TaskList taskList={taskList} key={taskList.id} />
          ))}
        {!editMode ? (
          <AddItem setEditMode={setEditMode} hint="Add another list" />
        ) : (
          <AddItemForm
            submitHandler={submitHandler}
            setEditMode={setEditMode}
            title={listTitle}
            hint="Add list"
            onChangeHandler={(e) => setListTitle(e.target.value)}
          />
        )}
      </div>
    </DetailsContainer>
  );
};

export default BoardDetails;

const DetailsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f17f7f;
  color: #000;
  padding: 40px 60px 0 60px;
  display: flex;
  flex-direction: column;
`;
const BackToBoard = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 5px 10px;
  border: 1px solid #4e0101;
  border-radius: 5px;
  cursor: pointer;
`;
