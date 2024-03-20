import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Exit from './Components/Exit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/exit' element={<Exit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
