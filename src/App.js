import Header from './components/Header';

function App() {

  const address = {
    postalCode: 55150,
    area: "Sher Shah Colony, Lahore",
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
      <Header address={address} student={me} className='text-blue-500'/>
    </div>
  );
}

export default App;