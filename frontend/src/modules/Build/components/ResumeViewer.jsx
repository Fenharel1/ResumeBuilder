import { useContext, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { useNavigate } from "react-router-dom";
import { ResumeModel } from "../models/model";

export const ResumeViewer = () => {
  const [generate, setGenerate] = useState(false);
  const { resume, setStep, setResume } = useContext(ResumeContext);
  const navigate = useNavigate();

  const getPDF = () => {
    // send resume data to api
    console.log(resume);
  };

  const onGenerate = () => {
    setGenerate(true);
    getPDF();
  };

  const onDownladPDF = () => {
    console.log("downloaded!");
  };

  const goHome = () => {
    setResume(ResumeModel);
    navigate("/");
  };

  return (
    <>
      {!generate ? (
        <div className="w-full h-full flex flex-col gap-y-10 items-center justify-center">
          <div className="text-2xl">
            By clicking Generate you will generate your resume, ready?
          </div>
          <div className="flex flex-row gap-x-5 justify-center">
            <button
              className="text-2xl px-14 py-2 bg-black bg-opacity-10 rounded-[10px]"
              onClick={() => setStep(3)}
            >
              Back
            </button>
            <button
              onClick={onGenerate}
              className="btn-primary text-2xl px-10 py-2"
            >
              Generate
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center flex flex-col justify-center items-center gap-y-10">
          <p className="text-3xl">Here is your resume {"in"} pdf! enjoy it!</p>
          <div className="space-y-5">
            {/* PDF GOES HERE */}
            <div className="bg-gray-200 h-[400px] w-[290px] text-center">
              PDF GOES HERE
            </div>
            <button
              className="btn-primary px-4 py-2 mx-auto"
              onClick={() => onDownladPDF()}
            >
              Download PDF
            </button>
          </div>
          <div className="w-full flex flex-row gap-x-5 justify-end items-center">
            <button
              className="text-lg px-14 py-2 bg-black bg-opacity-10 rounded-[10px]"
              onClick={() => setStep(3)}
            >
              Back
            </button>
            <button onClick={() => goHome()} className="btn-primary px-10 py-2">
              Go Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};
