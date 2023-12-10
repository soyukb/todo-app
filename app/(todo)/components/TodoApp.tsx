"use client";
import React, { useState } from "react";
import Title from "./Title";
import ToDoList from "./ToDoList";
import Form from "./Form";

interface Todo {
  id: any;
  content: string;
}

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (!todo) return;
    const newTodo: Todo = {
      id: Math.random(),
      content: todo,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };

  // console.log(todos[0].id);

  return (
    <div className="w-[300px] h-[400px] bg-white rounded-md shadow-md p-4 overflow-scroll">
      {/* アプリタイトル */}
      <Title />

      {/* todo入力フォーム */}
      <Form onSubmit={handleAddTodo} todo={todo} setTodo={setTodo} />

      {todos.length}

      {/* todoリスト */}
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
