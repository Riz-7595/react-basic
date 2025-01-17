import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
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
        <Link to='/A' className='px-8 py-4 bg-gray-300 rounded-xl'>A</Link>
        <Link to='/B' className='px-8 py-4 bg-gray-300 rounded-xl'>B</Link>
        <Link to='/C' className='px-8 py-4 bg-gray-300 rounded-xl'>C</Link>
      </nav>
      <Header address={address} student={me} className='text-blue-500'/>
    </div>
  );
}

export default HomePage
