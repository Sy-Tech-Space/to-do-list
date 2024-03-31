import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const SingleTask = () => {
  return (
        <div className=' border-b border-violet-400 py-2 flex items-center justify-between min-w-96'> 
            <div>
                <input type="checkbox" name="" id="" className='mx-2'/>
                Work 
            </div>
            <div>
                <FiEdit className='inline'/> 
                <MdDeleteForever className='inline mx-2'  /> 
            </div>
        </div>
  )
}

export default SingleTask