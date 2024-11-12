import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Login from './components/login';
import NotFound from './components/NotFound';
import Home from './components/Homepage';
import Register from '../src/components/Backend-Link/Registration';
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
import UseParams from './components/24-08/useparams';
import Propdrilling from './components/24-08/PropDrilling';
import Mapping2 from './components/24-08/Mapping2';
import Todo from './components/25-08/todo';
import DynamicStyling from './components/29-08/Dynamicstyling';
import UseReducer from './components/1-09/useReducer';
import RegisterValidation2 from './components/31-08/RegisterValidation2';
import RegisterValidation from './components/31-08/RegisterValidation';
import Usememo from './components/05-08/Usememo';
import Product from './components/14-09/axiosfetch';
import UseRef from './components/15-09/UseRef';
import ReduxCounter from './components/19-09/Reduxcounter';
import RapidApi from './components/Weather/RapidApi'
import LoginPage from './components/Backend-Link/LoginPage';
import HomePage from './components/Backend-Link/HomePage';
import Dashboard from './components/Backend-Link/Dashboard';

function App() {
  const [counter, setCounter] = useState(0);

  const Inc = () => {
    setCounter(counter + 1);
  };



  return (
    <div>
      <Navbar/>
      {/* <RapidApi/> */}
      <Routes>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/register-validation" element={<RegisterValidation/>}/>
    <Route path="/register-validation2" element={<RegisterValidation2/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/useeffect1' element={<UseEffect1/>}/>
    <Route path='/useeffect2' element={<UseEffect2/>}/>
    <Route path='/useeffect3' element={<UseEffect3/>}/>
    <Route path='/useeffect4' element={<UseEffect4/>}/>
    <Route path='/products/:id' element={<UseParams/>}/>
    <Route path='/props'
     element={<Propdrilling fname={["sneha","pooja","anaida"]}
     counter={counter}
     Inc={Inc}
     />}/>
     
     <Route path='/mapping2' element={<Mapping2/>}/>
     <Route path='/todo' element={<Todo/>}/>
     <Route path='/dynamicstyling' element={<DynamicStyling/>}/>
     <Route path='/usereducer' element={<UseReducer/>}/>
     <Route path="/usememo" element={<Usememo/>}/>
     <Route path="/Axious" element={<Product/>}/>
     <Route path="/redux-counter" element={<ReduxCounter/>}/>
  </Routes>
      </div>
  );
}

export default App;
