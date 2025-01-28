import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, decrementByAmount } from '../app/counterSlice';

const HomePage = () => {

  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0)

  const [color, setColor] = useState("bg-gray-300")

  const address = {
    postalCode: 55150,
    area: "SherShah Colony, Lahore",
    permanent: false
  }

  class Person {
    constructor(first, last = '') {
      this.firstName = first;
      this.lastName = last;
    }
  }

  class Student extends Person {
    constructor(first, last = '', degree) {
      super(first, last);
      this.degreeName = degree;
    }
  }

  const addAmount = () => {
    dispatch(incrementByAmount(Number(amount)));
    setAmount(0);

  }

  const subtractAmount = () => {
    dispatch(decrementByAmount(Number(amount)));
    setAmount(0);

  }

  const me = new Student('Rizwan', 'Khalid', 'COMSATS');

  return (
    <div className='px-12 pt-12'>
      <nav className='flex justify-around text-5xl pb-6'>
        <Link to='/weather' className={`px-8 py-4 rounded-xl ${color}`}>Weather</Link>
        <Link to='/A' className={`px-8 py-4 rounded-xl ${color}`}>A</Link>
        <Link to='/B' className={`px-8 py-4 rounded-xl ${color}`}>B</Link>
        <Link to='/C' className={`px-8 py-4 rounded-xl ${color}`}>C</Link>
      </nav>
      <Header address={address} student={me} className='text-blue-500' />
      <div className='flex gap-1'>
        <button onClick={() => { setColor('bg-blue-300') }} className='bg-blue-300 rounded-xl p-4 mt-6'>Button A</button>
        <button onClick={() => { setColor('bg-red-300') }} className='bg-red-300 rounded-xl p-4 mt-6'>Button B</button>
      </div>
      <Counter />
      <p>Counter: {count}</p>
      <form onSubmit={(e) => e.preventDefault()} className='mt-4'>
        <input type="text" value={amount ? amount : ''} onChange={(e) => setAmount(e.target.value)} className='bg-orange-300 rounded-lg px-4 pb-[2px] w-32 mr-4 caret-transparent' />
        <button onClick={addAmount} className='mr-4 bg-green-300 rounded-lg px-4 py-2 hover:bg-green-400 active:bg-green-500'>Add</button>
        <button onClick={subtractAmount} className='bg-red-300 rounded-lg px-4 py-2 hover:bg-red-400 active:bg-red-500'>Subtract</button>
      </form>
    </div>
  );
}

export default HomePage
