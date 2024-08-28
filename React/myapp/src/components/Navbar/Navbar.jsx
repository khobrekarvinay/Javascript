import "../Navbar/navbar.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Navbar () {
      const router = useNavigate();
      function Home(){
        router("/")
      }
      function Login(){
        router("/login")
      }
      function Register(){
        router("/register")
      }
      function Counter(){
        router("/counter")
      }
      function UseEffect1(){
router("/useEffect1")
      }
      function UseEffect2(){
        router("/useEffect2")
      } 
      function UseEffect3(){
        router("/useEffect3")
      }
      function UseEffect4(){
        router("/useEffect4")
      }
      function Touseparams(){
        router("/products/:id")
    }
    function Topropdrilling(){
        router("/props")
    }
    function Tomapping(){
        router("/mapping")
    }
    function Todo(){
        router("/todo")
    }
    function Tomapping2(){
        router("/mapping2")
    }
      return (
        <div className="parent">
            <h1 onClick={Home}>Home</h1>
            <h1 onClick={Login}>Login</h1>
            <h1 onClick={Register}>Register</h1>
            <h1 onClick={Counter}>Counter</h1>
            <h1 onClick={UseEffect1}>UseEffect1 </h1>
            <h1 onClick={UseEffect2}>UseEffect2 </h1>
            <h1 onClick={UseEffect3}>UseEffect3 </h1>
            <h1 onClick={UseEffect4}>UseEffect4 </h1>
            <h1 onClick={Touseparams}>useParams</h1>
            <h1 onClick={Topropdrilling}>PropDrilling</h1>
            <h1 onClick={Tomapping}>Mapping1</h1>
            <h1 onClick={Tomapping2}>Mapping2</h1>
            <h1 onClick={Todo}>Todo</h1>
        </div>
      )
}
export default Navbar;



