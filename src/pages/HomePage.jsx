import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {

  const [color, setColor] = useState("bg-gray-300")

  const address = {
    postalCode: 55150,
    area: "SherShah Colony, Lahore",
    permanent: false
  }

  class Person {
    constructor(first, last = '')
    {
      this.firstName = first;
      this.lastName = last;
    }
  }

  class Student extends Person {
    constructor(first, last='',degree)
    {
      super(first,last);
      this.degreeName = degree;
    }
  }

  const me = new Student('Rizwan','Khalid','COMSATS');

  return (
    <div className='px-12 pt-12'>
      <nav className='flex justify-around text-5xl pb-6'>
        <Link to='/A' className={`px-8 py-4 rounded-xl ${color}`}>A</Link>
        <Link to='/B' className={`px-8 py-4 rounded-xl ${color}`}>B</Link>
        <Link to='/C' className={`px-8 py-4 rounded-xl ${color}`}>C</Link>
      </nav>
      <Header address={address} student={me} className='text-blue-500'/>
      <div className='flex gap-1'>
      <button onClick={()=>{setColor('bg-blue-300')}} className='bg-blue-300 rounded-xl px-4 py-4 mt-6'>Button A</button>
      <button onClick={()=>{setColor('bg-red-300')}} className='bg-red-300 rounded-xl px-4 py-4 mt-6'>Button B</button>
      </div>
    </div>
  );
}

export default HomePage
