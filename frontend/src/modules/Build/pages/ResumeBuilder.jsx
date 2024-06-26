import { useContext, useState } from "react";
import { FirstStep } from "../components/FirstStep";
import { SecondStep } from "../components/SecondStep";
import { ThirdStep } from "../components/ThirdStep";
import { FourthStep } from "../components/FourthStep";
import { FifthStep } from "../components/FifthStep";
import { ResumeContext } from "../context/resumeContext";
import { ResumeViewer } from "../components/ResumeViewer";

const ProgressLabel = ({ label, idx, final }) => {
  const { step } = useContext(ResumeContext);
  return (
    <>
      {step >= idx ? (
        final ? (
          <div className="w-full py-3 btn-primary px-10 font-black">
            {label}
          </div>
        ) : (
          <div className="w-full py-3 btn-primary px-10">{label}</div>
        )
      ) : (
        <div className="w-full py-3 btn-primary px-10 !bg-white !border-primary !border-[3px] text-black">
          {label}
        </div>
      )}
    </>
  );
};

export const ResumeBuilder = () => {
  const { step } = useContext(ResumeContext);
  const [suggestions, setSuggestions] = useState(null);

  const getSuggestions = async (jobTitle, industry, jobDescription) => {
    try {
      const response = await fetch('http://localhost:5000/api/analyze-job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jobTitle, industry, jobDescription })
      });
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return (
    <>
      <div className="flex gap-x-10 flex-start px-20 absolute top-[120px]">
        <div className="rounded-[15px] h-fit flex flex-col justify-center gap-y-10 py-[120px] bg-white px-12 border w-[379px] shadow-xl">
          <ProgressLabel label="Personal Information" idx={0}></ProgressLabel>
          <ProgressLabel label="Education" idx={1}></ProgressLabel>
          <ProgressLabel label="Experience" idx={2}></ProgressLabel>
          <ProgressLabel label="Contact Information" idx={3}></ProgressLabel>
          <ProgressLabel label="Get your resume!" final={true} idx={4}></ProgressLabel>
        </div>
        <div className="max-h-[50rem] overflow-auto relative rounded-[15px] w-[1100px] px-10 py-10 bg-white border shadow-xl flex flex-col flex-start gap-y-10">
          {step === 0 && <FirstStep />}
          {step === 1 && <SecondStep />}
          {step === 2 && <ThirdStep />}
          {step === 3 && <FourthStep />}
          {step === 4 && <ResumeViewer />}
        </div>
      </div>
    </>
  );
};
