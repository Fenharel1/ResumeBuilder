import React, { createContext, useState } from 'react';
import { ResumeModel } from '../models/model';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({ ...ResumeModel, certificates: [] });
  const [step, setStep] = useState(0);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData, step, setStep }}>
      {children}
    </ResumeContext.Provider>
  );
};
