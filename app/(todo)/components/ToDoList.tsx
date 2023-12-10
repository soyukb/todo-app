import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ToDoList = ({ todos, setTodos }) => {
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const listMap = todos.map((todo, index) => {
    return (
      <div className="mt-3" key={index}>
        {/* todo 内容を表示する */}
        <div className="border-2 border-gray-200 w-full p-2 flex flex-row gap-2">
          <input type="checkbox" />

          <div className="flex-1">{todo.content}</div>
          <div>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <>{listMap}</>;
};

export default ToDoList;
