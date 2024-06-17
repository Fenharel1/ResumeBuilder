import { useState } from "react";
import { useParams } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import { FirstStep } from "../components/FirstStep";

const ProgressLabel = ({ label, step, idx }) => {
  return (
    <>
      {step >= idx ? (
        <div className="w-full py-3 btn-primary px-10">{label}</div>
      ) : (
        <div className="w-full py-3 btn-primary px-10 !bg-white !border-primary !border-[3px] text-black">
          {label}
        </div>
      )}
    </>
  );
};

export const ResumeBuilder = () => {
  const { params } = useParams();
  console.log(params);
  const [step, setStep] = useState(0);

  return (
    <div className="flex gap-x-10 flex-start px-20  absolute top-[120px]">
      <div className="rounded-[15px] flex flex-col justify-center gap-y-10 py-[120px] bg-white px-12 border w-[379px] shadow-xl">
        <ProgressLabel
          label="Personal Information"
          step={step}
          idx={0}
        ></ProgressLabel>
        <ProgressLabel label="Education" step={step} idx={1}></ProgressLabel>
        <ProgressLabel label="Experience" step={step} idx={2}></ProgressLabel>
        <ProgressLabel
          label="Contact Information"
          step={step}
          idx={3}
        ></ProgressLabel>
        <ProgressLabel
          label="Award/Certification"
          step={step}
          idx={4}
        ></ProgressLabel>
      </div>
      <div className="rounded-[15px] w-[1100px] px-10 py-10 bg-white border shadow-xl flex flex-col justify-between">
        {step == 0 && <FirstStep></FirstStep>}
        <div>
          {step > 0 && (
            <button
              className="text-4xl float-left font-bold flex items-center"
              onClick={() => {
                setStep(Math.max(step - 1, 0));
              }}
            >
              <LuArrowLeft></LuArrowLeft>
            </button>
          )}
          {step < 4 && (
            <button
              className="btn-primary float-right py-3 px-10"
              onClick={() => {
                setStep(Math.min(step + 1, 4));
              }}
            >
              Next step
            </button>
          )}
        </div>
      </div>
    </div>
  );
};