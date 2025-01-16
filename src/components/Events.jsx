import React from 'react'

const Events = () => {

  const greet = (x,e) => {
    console.log(e.type);
    alert(`YOU CLICKED ON BUTTON-${x}`);
  }

  return (
    <div className='flex gap-1'>
      <button onClick={(e)=>{greet('A',e)}} className='bg-blue-300 rounded-xl px-4 py-4 mt-6'>Button A</button>
      <button onClick={(e)=>{greet('B',e)}} className='bg-red-300 rounded-xl px-4 py-4 mt-6'>Button B</button>
    </div>
  )
}

export default Events
