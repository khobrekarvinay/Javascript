import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import NotFound from './components/NotFound';
import Home from './components/Homepage';
import Register from './components/register';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Navbar/counter';
import UseEffect3 from './components/useffecthook/useEffect3';
import UseEffect2 from './components/useffecthook/useEffect2';
import UseEffect1 from './components/useffecthook/useEffect1';
import UseEffect4 from './components/useffecthook/useEffect4';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/UseEffect1" element={<UseEffect1 />} />
        <Route path="/UseEffect2" element={<UseEffect2/>} />
        <Route path="/UseEffect3" element={<UseEffect3/>}/>
        <Route path="/UseEffect4" element={<UseEffect4/>}/>
      </Routes>
      </div>
  );
}

export default App;
