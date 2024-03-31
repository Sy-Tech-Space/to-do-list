import React from "react";



function Input() {

  return (
    <form className="flex justify-center items-center my-12">
      
      <input
        className=" border-2 p-2 rounded"
        name="todo"
      />
      <button className="border-2 m-2 rounded py-2 px-4 bg-violet-500 text-white">
        {" "}
        Add Task
      </button>
    </form>
  );
}

export default Input;
