import './App.css';
import { Header } from './components/Header';

function App() {

  const address = {
    unit: 805,
    street: 7,
    city: "Lahore",
    permanent: false
  }

  return (
    <div>
      <Header address={address} className='text-blue-500'/>
    </div>
  );
}

export default App;
