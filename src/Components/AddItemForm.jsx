import React from "react";
import styled from "styled-components";

const AddItemForm = ({
  submitHandler,
  onChangeHandler,
  setEditMode,
  title,
  hint,
}) => {
  const createHandler = (e) => {
    e.preventDefault();
    if (title !== "") {
      submitHandler();
    } else {
      alert("Please Provide a Valid Title.");
    }
  };
  return (
    <FormContainer>
      <form onSubmit={createHandler}>
        <Textarea
          autoFocus
          cols="25"
          rows="2"
          placeholder="Enter the title"
          value={title}
          onChange={onChangeHandler}
        />
        <div>
          <Button type="submit">{hint}</Button>
          <span
            style={{ padding: "5px", cursor: "pointer" }}
            onClick={() => setEditMode(false)}
          >
            x
          </span>
        </div>
      </form>
    </FormContainer>
  );
};

export default AddItemForm;

const FormContainer = styled.div`
  height: 180px;
  padding: 10px 20px;
  margin-top: 20px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #a4d1ba;
`;
const Textarea = styled.textarea`
  border: 2px solid #251919;
  border-radius: 8px;
  padding: 20px 15px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 8px 5px;
  background-color: #dbecb1;
  color: #000;
  border: none;
  border-radius: 6px;
  margin-right: 10px;
  font-weight: 600;
  cursor: pointer;
`;
