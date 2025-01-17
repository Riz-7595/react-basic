import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../app/counterSlice'

const Counter = () => {

  const dispatch = useDispatch();

  return (
    <div className='flex mt-2 gap-4'>
      <button onClick={()=>{dispatch(decrement())}} className='pb-1 w-8 bg-green-300 rounded-xl text-xl'>-</button>
      <button onClick={()=>{dispatch(increment())}} className='pb-1 w-8 bg-green-500 rounded-xl text-xl'>+</button>
    </div>
  )
}

export default Counter
