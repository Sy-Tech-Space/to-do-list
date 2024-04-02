import React from "react";

function Input() {
  return (
    <div className="rounded bg-white shadow-2xl -mt-14 mx-auto p-5 max-w-[700px]">
      <h4 className="font-bold text-left text-darkgray text-lg mb-2">
        New Todo:
      </h4>
      <form
        action=""
        className="flex flex-row justify-between gap-3 h-12 w-full"
      >
        <input
          type="text"
          name="text"
          id="text"
          className="rounded border-2 border-lightborder outline-none px-4 w-4/5"
        />
        <button className="bg-brand text-lg font-semibold rounded text-white py-2 w-1/5">
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
