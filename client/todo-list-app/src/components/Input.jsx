import React from 'react'

function Input() {
  return (
    <div className=" m-20 flex justify-center items-center">
    <input
      className=" border-2 p-2 rounded   border-gray-600"
      name="firstName"
    />
    <button className="border-2 m-1 rounded p-2 bg-pink-500  border-gray-600">
      {" "}
      Add Task
    </button>
  </div>
  )
}

export default Input