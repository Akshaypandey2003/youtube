import React from 'react'

const Button = ({name}) => {
  return (
  <div className='text-white text-xs mx-2'>
    <button className='px-4 py-2 bg-gray-800 rounded-md'>{name}</button>
  </div>
   
  )
}

export default Button