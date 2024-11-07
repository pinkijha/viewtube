import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='m-2 px-3 py-1 font-bold bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
