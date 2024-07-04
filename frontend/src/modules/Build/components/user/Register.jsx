// src/components/Register.js
import React, { useState } from 'react';
import { register, loginWithGoogle, loginWithGitHub, loginWithLinkedIn } from '../../../../services/api';
import { Navbar } from '../../../Landing/components/Navbar';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ name, email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify({ name, email }));
      navigate('/dashbord'); // Adjust according to your route
    } catch (error) {
      setError('Error registering user');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full p-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
            Register
          </button>
        </form>
        <div className="flex flex-col items-center">
          <p className="mt-4">Sign in with</p>
          <div className="flex mt-6 justify-center w-full space-x-4">
            <button onClick={loginWithGoogle} className="flex items-center justify-center w-1/3 p-2 text-black border rounded-md">
              <FcGoogle className="mr-2 h-6 w-6" /> Google
            </button>
            <button onClick={loginWithGitHub} className="flex items-center justify-center w-1/3 p-2 text-black border rounded-md">
              <FaGithub className="mr-2 h-6 w-6" /> GitHub
            </button>
            <button onClick={loginWithLinkedIn} className="flex items-center justify-center w-1/3 p-2 text-black border rounded-md">
              <FaLinkedin className="mr-2 h-6 w-6" /> LinkedIn
            </button>
          </div>
          <p className="mt-4 text-center">
            Already have an account? <NavLink to="/login" className="text-purple-500 underline">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
