import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from '../../Landing/components/Navbar';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [cvs, setCvs] = useState([]);
  const [cvTemplates, setCvTemplates] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    const fetchUserCvs = async () => {
      try {
        const response = await axios.get('/api/user/cvs', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setCvs(response.data);
      } catch (error) {
        console.error('Error fetching user CVs:', error);
      }
    };

    const fetchCvTemplates = async () => {
      try {
        const response = await axios.get('/api/user/cv-templates', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setCvTemplates(response.data);
      } catch (error) {
        console.error('Error fetching CV templates:', error);
      }
    };

    fetchUserProfile();
    fetchUserCvs();
    fetchCvTemplates();
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
      setCvs([...cvs, response.data]);
    } catch (error) {
      console.error('Error uploading CV:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-md rounded-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">User Information</h2>
          {user && (
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <input type="file" onChange={handleCvUpload} className="mt-4 p-2 border border-gray-300 rounded-md" />
            </div>
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
          {cvTemplates.length > 0 ? (
            <ul>
              {cvTemplates.map((template, index) => (
                <li key={index}>
                  <a href={template.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {template.name}
                  </a>
                  <p>{template.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No CV templates available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
