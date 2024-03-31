import React from 'react'
import Input from './Input'
import SingleTask from './SingleTask'

const ToDoList = () => {


  return (
    <div className='border-red-400 border text-center'>
        <Input />
            <h1 className='text-2xl font-bold text-purple-500'>To Dos</h1>
        <div className="flex justify-center items-center gap-2 flex-col border-t border-l border-black py-6 mx-80">
            <ul className='flex justify-center items-center gap-2 flex-col'>
                <SingleTask />
                <SingleTask />
                <SingleTask />
                <SingleTask />
                <SingleTask />
                <SingleTask />
                <SingleTask />
            </ul>
        </div>
    </div>
  )
}

export default ToDoList