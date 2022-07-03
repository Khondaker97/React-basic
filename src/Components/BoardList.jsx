import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//component
import BoardItem from "./BoardItem";
//context
import { BoardContext } from "../context/Board";

const BoardList = () => {
  const { boards } = useContext(BoardContext);

  return (
    <BoardContainer>
      {boards.map((board) => (
        <Link key={board.id} to={`/${board.id}`}>
          <BoardItem board={board} />
        </Link>
      ))}
    </BoardContainer>
  );
};

export default BoardList;

const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
