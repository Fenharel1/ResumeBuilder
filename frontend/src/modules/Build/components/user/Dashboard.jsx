import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from '../../../Landing/components/Navbar';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [cvs, setCvs] = useState([]);
  const [cvTemplates, setCvTemplates] = useState([
    {
      name: 'Template 1',
      description: 'A professional CV template.',
      url: 'https://www.canva.com/design/DAGIpXGjPow/0z7RcXopsUh9W9Qr5AanGw/edit?utm_content=DAGIpXGjPow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
      name: 'Template 2',
      description: 'A modern CV template.',
      url: 'https://www.canva.com/design/DAGIpXGjPow/0z7RcXopsUh9W9Qr5AanGw/edit?utm_content=DAGIpXGjPow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
      name: 'Template 3',
      description: 'A clean CV template.',
      url: 'https://www.canva.com/design/DAGIpXGjPow/0z7RcXopsUh9W9Qr5AanGw/edit?utm_content=DAGIpXGjPow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
      name: 'Template 4',
      description: 'A creative CV template.',
      url: 'https://www.canva.com/design/DAGIpXGjPow/0z7RcXopsUh9W9Qr5AanGw/edit?utm_content=DAGIpXGjPow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    }
  ]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
          setUser(userData);
        } else {
          const response = await axios.get('/api/user/profile', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    const fetchUserCvs = async () => {
      try {
        const response = await axios.get('/api/user/cvs', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setCvs(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching user CVs:', error);
      }
    };

    fetchUserProfile();
    fetchUserCvs();
  }, []);

  const handleCvUpload = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    try {
      const response = await axios.post('/api/user/upload-cv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCvs((prevCvs) => [...prevCvs, response.data]);
    } catch (error) {
      console.error('Error uploading CV:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto mb-12 p-6">
      <Navbar />
      </div>
      
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-md rounded-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">User Information</h2>
          {user ? (
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <input type="file" onChange={handleCvUpload} className="mt-4 p-2 border border-gray-300 rounded-md" />
            </div>
          ) : (
            <p>Loading user information...</p>
          )}
        </div>

        <div className="bg-white shadow-md rounded-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Your CVs</h2>
          {cvs.length > 0 ? (
            <ul>
              {cvs.map((cv, index) => (
                <li key={index}>
                  <a href={cv.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {cv.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No CVs uploaded yet.</p>
          )}
        </div>

        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold mb-4">CV Templates</h2>
          <div className="grid grid-cols-2 gap-4">
            {cvTemplates.map((template, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
                <iframe
                  src={template.url}
                  title={template.name}
                  className="w-full h-40 border-none"
                ></iframe>
                <h3 className="text-xl font-bold mt-2">{template.name}</h3>
                <p className="text-gray-700">{template.description}</p>
                <a href={template.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 inline-block">
                  View Template
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
