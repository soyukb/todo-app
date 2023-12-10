import React, { useState } from "react";

const Form = ({ onSubmit, todo, setTodo }) => {
  const handleClick = () => {
    onSubmit();
  };

  return (
    <div className="mt-3 flex flex-row gap-3">
      <input
        type="text"
        className="border-2 border-gray-500 rounded p-1 w-[200px]"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md "
        onClick={handleClick}
      >
        追加
      </button>
    </div>
  );
};

export default Form;
