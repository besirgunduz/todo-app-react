import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import FormTodo from "./FormTodo";
import Todo from "./Todo";

function Content() {
  const [todos, setTodos] = useState([
    {
      text: "İngilizce çalış",
      isDone: true,
    },
    {
      text: "Algoritma soruları çöz",
      isDone: true,
    },
    {
      text: "React çalış",
      isDone: true,
    },
    {
      text: "Kitap oku",
      isDone: false,
    },
  ]);

  // todo ekle
  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  // todo yapıldı,yapılmadı
  const markTodo = (index) => {
    const newTodos = [...todos];

    newTodos[index].isDone
      ? (newTodos[index].isDone = false)
      : (newTodos[index].isDone = true);

    setTodos(newTodos);
  };

  // todo sil
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Yapılacaklar listesi</h1>
      <FormTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Card>
            <Card.Body>
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Content;
