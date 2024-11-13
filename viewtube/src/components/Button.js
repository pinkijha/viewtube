import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
      <button className=' m-2 px-3 py-1 font-bold bg-gray-200 
      rounded-lg hover:bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button
