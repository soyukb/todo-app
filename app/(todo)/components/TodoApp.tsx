"use client";
import React, { useState } from "react";

interface Todo {
  content: string;
}

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (!todo) return;
    const newTodo: Todo = {
      content: todo,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };
  return (
    <div className="w-[300px] h-[400px] bg-white rounded-md shadow-md p-4">
      {/* アプリタイトル */}
      <div className="fond-bold">TodoApp</div>

      {/* todo入力フォーム */}
      <div className="mt-3 flex flex-row gap-3">
        <input
          type="text"
          className="border-2 border-gray-500 rounded p-1 w-[200px]"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md "
          onClick={handleAddTodo}
        >
          追加
        </button>
      </div>
      {todos.length}

      {/* todoリスト */}
      <div className="mt-3 ">
        {/* todo 内容を表示する */}
        <div className="border-2 border-gray-200 w-full p-2 flex flex-row gap-2">
          <input type="checkbox" />
          <div className="flex-1">出かける</div>
          <div>
            <button>削除</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
