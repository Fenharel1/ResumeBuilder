import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OAuthCallback = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      window.location.href = '/profile'; // Adjust according to your route
    } else {
      // Handle error
      console.error('No token found');
    }
  }, [location]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
