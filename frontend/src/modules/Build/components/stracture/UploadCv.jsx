// src/components/UploadCv.js

import React, { useState } from 'react';
import axios from 'axios';

const UploadCv = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('cv', file);

    try {
      const response = await axios.post('/api/user/upload-cv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      onUpload(response.data);
    } catch (error) {
      console.error('Error uploading CV', error);
    }
  };

  return (
    <div className="upload-cv">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload CV</button>
      </form>
    </div>
  );
};

export default UploadCv;
