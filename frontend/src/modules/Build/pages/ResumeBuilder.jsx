import { useContext } from "react";
import { FirstStep } from "../components/FirstStep";
import { SecondStep } from "../components/SecondStep";
import { ThirdStep } from "../components/ThirdStep";
import { FourthStep } from "../components/ForthStep";
import { FifthStep } from "../components/FifthStep";
import { ResumeContext } from "../context/resumeContext";
import { ResumeViewer } from "../components/ResumeViewer";
import { JobSuggestion } from "../components/JobSuggestion";

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
  const { step, setStep } = useContext(ResumeContext);
  return (
    <>
      <div className="flex gap-x-10 flex-start px-20 absolute top-[120px]">
        <div className="rounded-[15px] h-fit flex flex-col justify-center gap-y-10 py-[120px] bg-white px-12 border w-[379px] shadow-xl">
          <ProgressLabel label="Personal Information" idx={0}></ProgressLabel>
          <ProgressLabel label="Education" idx={1}></ProgressLabel>
          <ProgressLabel label="Experience" idx={2}></ProgressLabel>
          <ProgressLabel label="Contact Information" idx={3}></ProgressLabel>
          <ProgressLabel label="Get your resume!" idx={4}></ProgressLabel>
          <ProgressLabel label="See Job Suggestions" final={true} idx={5}></ProgressLabel>
        </div>
        <div className="max-h-[50rem] overflow-auto relative rounded-[15px] w-[1100px] px-10 py-10 bg-white border shadow-xl flex flex-col flex-start gap-y-10">
          {step === 0 && <FirstStep />}
          {step === 1 && <SecondStep />}
          {step === 2 && <ThirdStep />}
          {step === 3 && <FourthStep />}
          {step === 4 && (
            <>
              <ResumeViewer />
              <button
                className="btn-primary py-3 px-10"
                onClick={() => setStep(5)}
              >
                Next step
              </button>
            </>
          )}
          {step === 5 && <JobSuggestion />}
        </div>
      </div>
    </>
  );
};
