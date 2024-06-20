import { createContext, useState } from "react";
import { ResumeModel } from "../models/model";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const initialResume = ResumeModel;
  const [resume, setResume] = useState(initialResume);
  const [step, setStep] = useState(0);

  return (
    <ResumeContext.Provider value={{ resume, setResume, step, setStep }}>
      {children}
    </ResumeContext.Provider>
  );
};
