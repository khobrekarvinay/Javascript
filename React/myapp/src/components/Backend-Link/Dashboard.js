// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Please login first");
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/v1/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (error) {
        toast.error("Failed to fetch profile data.");
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
      }
    };

    fetchProfileData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    toast.info("Logged out successfully!");
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome, {user ? user.name : 'User'}!</h1>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer position='top-center' autoClose={2000} />
    </div>
  );
};

export default Dashboard;
