import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BoardContext } from "../context/Board";
import { CREATE_BOARD } from "../utils/constants";

const Form = () => {
  const [boardTitle, setBoardTitle] = useState("");
  const { dispatchBoard } = useContext(BoardContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (boardTitle) {
      dispatchBoard({ type: CREATE_BOARD, payload: { title: boardTitle } });
      setBoardTitle("");
    } else {
      alert("Please Provide a Board Name");
    }
  };
  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          name="boardTitle"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        />
        <Button type="submit" onClick={submitHandler}>
          Create Board
        </Button>
      </form>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  outline: none;
  padding: 5px 8px;
  border: 1px solid #aad3d6;
  border-radius: 5px 0 0 5px;
`;
const Button = styled.button`
  padding: 5px 8px;
  color: #000;
  background-color: #f3a5a5;
  transition: 0.3s all ease;
  border: 1px solid #aad3d6;
  border-radius: 0 5px 5px 0;
  &:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
