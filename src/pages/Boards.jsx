import React from "react";
import styled from "styled-components";
import BoardList from "../Components/BoardList";
import Form from "../Components/Form";

const Boards = () => {
  return (
    <BoardInfo>
      <Form />
      <BoardList />
    </BoardInfo>
  );
};

export default Boards;

const BoardInfo = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f17f7f;
  color: #000;
  padding: 40px 60px 0 60px;
`;
