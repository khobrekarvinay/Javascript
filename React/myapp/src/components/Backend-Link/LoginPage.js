import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
     const testConnection = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/auth/test');
        console.log("Backend test response:", response.data);
        if (response.data.success) {
          toast.info("Frontend is connected to Backend!");
        } else {  
          toast.error("Failed to connect to Backend");
        }
      } catch (error) {
        console.error("Backend connection error:", error);
        toast.error("Could not connect to Backend");
      }
    };
    testConnection();

    if (localStorage.getItem('isLoggedIn') === 'true') {
        toast.info("You are already logged in!");
        navigate('/dashboard');
    }
}, [navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    setSuccess(false);
    try {
      // Saves the res.json response at whatever place the result stopped in backend, 
      // either success or error message
      const response = await axios.post('http://localhost:8000/api/v1/auth/login', {
        userData: { email, password }
    });
      console.log(response);
      if (response.data.success) {
         const {token} = response.data;

        // Save login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('token', token);

        //show success toast
        toast.success("Login successful!");
        setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 2000);
         
      } else if (response.data.error) {
      // Display the specific error message from the backend
      toast.error(response.data.error);
    }

  } catch (error) {
    // Display the error message from the backend or a generic error
    const errorMessage = error.response?.data?.error || 'An error occurred during login. Please try again.';
    toast.error(errorMessage);
    console.error("Error Details:", errorMessage);
    }
  };

  return (
    <div className="parentdiv">
      <h2 className="regi">Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Login</button>
        {success && <span className="success-check">✓</span>}
      </form>
      <ToastContainer position='top-center' autoClose={2000} />
    </div>
  );
};

export default LoginPage;

