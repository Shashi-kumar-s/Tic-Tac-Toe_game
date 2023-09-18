import React from 'react'

const Square = (props) => {
    const{value ,onclick}=props
  return (
    <button className='border border-gray-800 w-14 h-14 font-bold rounded-md' onClick={onclick}>{value}</button>

  )
}

export default Square