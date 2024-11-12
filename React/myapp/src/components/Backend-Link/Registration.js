// RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    alert("Inside register function");
    try {
      const response = await axios.post(`http://localhost:8000/api/v1/auth/register`, {
        userData: { name, email, password, confirmpassword }
      });

      console.log("Backend response:", response.data); // Log backend response

      if (response.data.success) {
        toast.success("Registration successful! Please log in.");
        setTimeout(() => navigate('/login'));
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error in registration:", error);
      toast.error('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="parentdiv">
      <h2 className="regi">Register</h2>
      <form className="form" onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
      <ToastContainer position='top-center' autoClose={2000} />
    </div>
  );
};


export default RegisterPage;
