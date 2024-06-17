// src/components/CVForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CVForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: [{ institution: '', degree: '', startDate: '', endDate: '' }],
    workExperience: [{ company: '', position: '', startDate: '', endDate: '' }],
    skills: [''],
    projects: [{ title: '', description: '', link: '' }],
    certifications: [{ name: '', issuingOrganization: '', date: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, index, section) => {
    const { name, value } = e.target;
    const updatedArray = formData[section].map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setFormData({ ...formData, [section]: updatedArray });
  };

  const handleAddItem = (section) => {
    const newItem = Object.keys(formData[section][0]).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setFormData({ ...formData, [section]: [...formData[section], newItem] });
  };

  const handleRemoveItem = (index, section) => {
    const updatedArray = formData[section].filter((_, i) => i !== index);
    setFormData({ ...formData, [section]: updatedArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cv', formData);
      // Handle successful response
    } catch (error) {
      // Handle error response
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-2xl mt-24 p-8 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center">Create Your CV</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Institution</label>
                  <input 
                    type="text" 
                    name="institution" 
                    value={edu.institution} 
                    onChange={(e) => handleArrayChange(e, index, 'education')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Degree</label>
                  <input 
                    type="text" 
                    name="degree" 
                    value={edu.degree} 
                    onChange={(e) => handleArrayChange(e, index, 'education')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input 
                    type="date" 
                    name="startDate" 
                    value={edu.startDate} 
                    onChange={(e) => handleArrayChange(e, index, 'education')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <input 
                    type="date" 
                    name="endDate" 
                    value={edu.endDate} 
                    onChange={(e) => handleArrayChange(e, index, 'education')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button 
                  type="button" 
                  onClick={() => handleRemoveItem(index, 'education')} 
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button 
              type="button" 
              onClick={() => handleAddItem('education')} 
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Add Education
            </button>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Work Experience</h3>
            {formData.workExperience.map((work, index) => (
              <div key={index} className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={work.company} 
                    onChange={(e) => handleArrayChange(e, index, 'workExperience')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Position</label>
                  <input 
                    type="text" 
                    name="position" 
                    value={work.position} 
                    onChange={(e) => handleArrayChange(e, index, 'workExperience')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input 
                    type="date" 
                    name="startDate" 
                    value={work.startDate} 
                    onChange={(e) => handleArrayChange(e, index, 'workExperience')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <input 
                    type="date" 
                    name="endDate" 
                    value={work.endDate} 
                    onChange={(e) => handleArrayChange(e, index, 'workExperience')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button 
                  type="button" 
                  onClick={() => handleRemoveItem(index, 'workExperience')} 
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button 
              type="button" 
              onClick={() => handleAddItem('workExperience')} 
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Add Work Experience
            </button>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex space-x-2">
                <input 
                  type="text" 
                  name="skill" 
                  value={skill} 
                  onChange={(e) => handleArrayChange(e, index, 'skills')} 
                  required 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button 
                  type="button" 
                  onClick={() => handleRemoveItem(index, 'skills')} 
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button 
              type="button" 
              onClick={() => handleAddItem('skills')} 
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Add Skill
            </button>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input 
                    type="text" 
                    name="title" 
                    value={project.title} 
                    onChange={(e) => handleArrayChange(e, index, 'projects')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea 
                    name="description" 
                    value={project.description} 
                    onChange={(e) => handleArrayChange(e, index, 'projects')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Link</label>
                  <input 
                    type="url" 
                    name="link" 
                    value={project.link} 
                    onChange={(e) => handleArrayChange(e, index, 'projects')} 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button 
                  type="button" 
                  onClick={() => handleRemoveItem(index, 'projects')} 
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button 
              type="button" 
              onClick={() => handleAddItem('projects')} 
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Add Project
            </button>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Certifications</h3>
            {formData.certifications.map((cert, index) => (
              <div key={index} className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={cert.name} 
                    onChange={(e) => handleArrayChange(e, index, 'certifications')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Issuing Organization</label>
                  <input 
                    type="text" 
                    name="issuingOrganization" 
                    value={cert.issuingOrganization} 
                    onChange={(e) => handleArrayChange(e, index, 'certifications')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={cert.date} 
                    onChange={(e) => handleArrayChange(e, index, 'certifications')} 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button 
                  type="button" 
                  onClick={() => handleRemoveItem(index, 'certifications')} 
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button 
              type="button" 
              onClick={() => handleAddItem('certifications')} 
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Add Certification
            </button>
          </div>

          <button type="submit" className="w-full p-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
            Submit CV
          </button>
        </form>
      </div>
    </div>
  );
};

export default CVForm;
