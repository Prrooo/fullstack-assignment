import React from 'react'

const Card = (props) => {
  return (
    <div className=' bg-gray-200 w-full rounded-md text-left p-[1vw]'>
        <h1 className='font-bold border-b-2 border-gray-300'>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card