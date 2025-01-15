import './App.css';
import { Header } from './components/Header';

function App() {

  const city = "Lahore";

  return (
    <div>
      <Header city={city}/>
    </div>
  );
}

export default App;
