// src/components/Register.js

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { name, email, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to the profile or dashboard page
    } catch (error) {
      setError('Error registering user');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-1/2 ">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
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
      </div>
    </div>
  );
};

export default Register;
