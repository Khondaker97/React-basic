import React from "react";
import { Button, ListGroup } from "react-bootstrap";

function TodoList({
  inputList,
  inputListSet,
  inputSet,
  editSet,
  editableInputSet,
}) {
  const editTodo = (id) => {
    const editInput = inputList.find((item) => item.id === id);
    editSet(true);
    editableInputSet(editInput);
    inputSet(editInput.text);
  };
  const deleteTodo = (id) => {
    inputListSet(inputList.filter((item) => item.id !== id));
  };
  return (
    <div>
      <ListGroup className="mt-3" as="ul">
        {inputList.map((list, index) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            variant="secondary"
            action
            md="6"
            key={index}
          >
            {list.text}
            <div>
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => editTodo(list.id)}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => deleteTodo(list.id)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
