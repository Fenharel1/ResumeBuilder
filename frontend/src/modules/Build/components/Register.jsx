import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../../Landing/components/Navbar';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

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

  const handleOAuthRegister = (provider) => {
    window.location.href = `/api/auth/${provider}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Navbar></Navbar>
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
        <div className="flex justify-center mt-6 flex-col">
            <p className='text-center'>Sign in with</p>
        <div className='flex flex-row mt-6 justify-center w-full'>
          <button onClick={() => handleOAuthRegister('google')} className="w-1/3 p-2  flex flex-col text-black">
            <FcGoogle className=' w-1/2 h-10'/>
            <p className='text-center mt-2'>Google</p>
            </button>
          <button onClick={() => handleOAuthRegister('github')} className="w-1/3 p-2 flex flex-col justify-center text-black">
            <FaGithub className=' w-1/2 h-10' />
            <p className='text-center mt-2'>Github</p>
          </button>
          <button onClick={() => handleOAuthRegister('linkedin')} className="w-1/3 p-2 flex flex-col text-black">
            <FaLinkedin className=' w-1/2 h-10' />
            <p className='text-center mt-2'>LinkedIn</p>
          </button>
          </div>
          <p className=' text-center'>Already have an account <NavLink to='/login'><a className=' text-purple-500 underline'> Login</a></NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
