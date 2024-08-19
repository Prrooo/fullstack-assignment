import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-[7vw] py-[2vw] justify-between bg-black text-white text-xl items-center'>
        <div className=''>
            <p><span className='font-bold'>Abstract</span> | Help Center</p>   
        </div>
        <button className=' border-2 border-white rounded-md px-[1.5vw] py-[0.6vw]  '>
            Submit a request
        </button>
    </div>
  )
}

export default Navbar