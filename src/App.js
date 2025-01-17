import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import NoPage from "./pages/NoPage";

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/A" element={<PageA/>}/>
      <Route path="/B" element={<PageB/>}/>
      <Route path="/C" element={<PageC/>}/>
      <Route path="/*" element={<NoPage/>}/>
    </Routes>
  );
}

export default App;