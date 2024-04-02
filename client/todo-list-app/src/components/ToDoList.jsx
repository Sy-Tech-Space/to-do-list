import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { text: "Work", done: false },
    { text: "Shopping".repeat(4), done: false,},
    { text: "Coding", done: false },
  ]);

  const [editedText, setEditedText] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEditClick = (text, index) => {
    setEditedText(text);
    setEditingIndex(index)
  };
  
  const handleSave = (text, index) => {
    // Save text

    setEditedText("");
    setEditingIndex(-1)
  };

  return (
      <ul
        className="max-w-[700px] mx-auto my-12 rounded bg-white border
      border-lightborder flex flex-col justify-center items-center"
      >
        {todos &&
          todos.map((todo, index) => (
            <li
              key={todo.text}
              className="flex flex-col items-center justify-between rounded border w-full p-6 border-lightborder"
            >
              { editingIndex !== index ? (
                <div className="w-full flex justify-between items-center flex-1">
                  <div className="text-lg text-lightgray font-semibold flex items-center">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="cursor-pointer mr-4"
                    />
                    <p className="inline-block truncate w-56 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] overflow-hidden">
                      {todo?.text}
                    </p>
                  </div>

                  <div className="w-20">
                    <FaPencil
                      title="Edit"
                      size={24}
                      color="#FF33AE"
                      className="inline-block cursor-pointer"
                      onClick={ () => handleEditClick( todo?.text, index )}
                    />
                    <RiDeleteBin5Line
                      title="Delete"
                      size={24}
                      color="#FF33AE"
                      className="inline-block ml-8 cursor-pointer"
                    />
                  </div>
                </div>
              ) : (
                <form className="rounded text-lg text-lightgray font-semibold flex justify-between items-center gap-3 w-full h-10">
                  <h4 className="inline-block">Edit: </h4>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="rounded border-2 border-lightborder outline-none px-4 h-full w-full"
                  />
                  <button
                    onClick={handleSave}
                    title="Save changes"
                    className="bg-white text-brand border-2 border-lightborder text-lg font-bold rounded py-1 px-6 "
                  >
                    Save
                  </button>
                </form>
              )}
            </li>
          ))}
      </ul>
  );
};

export default ToDoList;
