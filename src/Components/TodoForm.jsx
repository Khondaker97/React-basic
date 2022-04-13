import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TodoList from "./TodoList";

function TodoForm() {
  const [input, inputSet] = useState();
  const [inputList, inputListSet] = useState([]);
  const [edit, editSet] = useState(false);
  const [editableInput, editableInputSet] = useState(null);

  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
    };
    inputListSet([newTodo, ...inputList]);
    inputSet("");
  };
  const updateTodo = () => {
    let updatedlist = inputList.map((list) => {
      if (list.id === editableInput.id) {
        list.text = input;
      }
      return list;
    });
    inputListSet(updatedlist);
    editSet(false);
    inputSet("");
    editableInputSet(null);
  };

  return (
    <>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Col sm="6">
            <Form.Control
              type="text"
              placeholder="Add a todo..."
              value={input}
              onChange={(e) => inputSet(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          as={Col}
          md={2}
          onClick={!edit ? addTodo : updateTodo}
        >
          {!edit ? "Add Todo" : "Update"}
        </Button>
      </Form>

      <TodoList
        inputList={inputList}
        inputListSet={inputListSet}
        inputSet={inputSet}
        editSet={editSet}
        editableInputSet={editableInputSet}
      />
    </>
  );
}

export default TodoForm;
