import { Button } from "react-bootstrap";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          variant="outline-success active"
          onClick={() => markTodo(index)}
        >
          ✓
        </Button>{" "}
        <Button
          variant="outline-danger active"
          onClick={() => removeTodo(index)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}

export default Todo;
