import { useContext, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { useNavigate } from "react-router-dom";
import { ResumeModel } from "../models/model";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export const ResumeViewer = () => {
  const [generate, setGenerate] = useState(false);
  const [pdfData, setPdfData] = useState(null);
  const { resume, setStep, setResume } = useContext(ResumeContext);
  const navigate = useNavigate();

  const getPDF = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resume),
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfData(url);
    } catch (error) {
      console.error('Failed to generate PDF', error);
    }
  };

  const onGenerate = () => {
    setGenerate(true);
    getPDF();
  };

  const onDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfData;
    link.download = 'resume.pdf';
    link.click();
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
          <p className="text-3xl">Here is your resume in PDF! Enjoy it!</p>
          <div className="space-y-5">
            {pdfData ? (
              <>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                  <Viewer fileUrl={pdfData} />
                </Worker>
                <button
                  className="btn-primary px-4 py-2 mx-auto"
                  onClick={onDownloadPDF}
                >
                  Download PDF
                </button>
              </>
            ) : (
              <div>Loading PDF...</div>
            )}
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
