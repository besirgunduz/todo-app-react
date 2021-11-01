import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return false;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Yeni Görev</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Yeni bir görev yazın"
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary m-2" type="submit">
          Ekle
        </Button>
      </div>
    </Form>
  );
}

export default FormTodo;
