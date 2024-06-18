import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this URL according to your backend server

const api = axios.create({
  baseURL: API_URL,
});

export const register = (userData) => {
  return api.post('/auth/register', userData);
};

export const login = (userData) => {
  return api.post('/auth/login', userData);
};

export const loginWithGoogle = () => {
  window.location.href = `${API_URL}/auth/google`;
};

export const loginWithGitHub = () => {
  window.location.href = `${API_URL}/auth/github`;
};

export const loginWithLinkedIn = () => {
  window.location.href = `${API_URL}/auth/linkedin`;
};
