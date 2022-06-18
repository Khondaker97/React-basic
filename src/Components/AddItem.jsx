import React from "react";
import styled from "styled-components";

const AddItem = ({ setEditMode, hint }) => {
  return (
    <AddContainer onClick={() => setEditMode(true)}>
      <span style={{ padding: "5px" }}>+ </span>
      <p>{hint}</p>
    </AddContainer>
  );
};

export default AddItem;
const AddContainer = styled.div`
  margin-top: 20px;
  padding: 8px 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 30px;
  background-color: #d6c2c2;
  color: #3a3a3a;
  border-radius: 6px;
  cursor: pointer;
`;
