import React from "react";
import { Container } from "react-bootstrap";
import TodoForm from "./TodoForm";

function Todo() {
  return (
    <Container>
      <h2 className="mt-3 mb-3">Todo App</h2>
      <TodoForm />
    </Container>
  );
}

export default Todo;
