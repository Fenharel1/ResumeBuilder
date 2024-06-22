import { useState, useContext, useEffect } from "react";
import { ResumeContext } from "../context/resumeContext";

export const FifthStep = () => {
  const [certificate, setCertificate] = useState({
    title: "",
    issuer: "",
    date: "",
    description: "",
  });
  const [certificateList, setCertificateList] = useState([]);
  const { resumeData, setResumeData, setStep } = useContext(ResumeContext);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate((prev) => ({ ...prev, [name]: value }));
  };

  const addCertificate = () => {
    setCertificateList([...certificateList, certificate]);
    setCertificate({ title: "", issuer: "", date: "", description: "" });
  };

  useEffect(() => {
    // Check if all fields are filled
    const isComplete = Object.values(resumeData.personal).every(field => field) &&
                       resumeData.education.every(edu => Object.values(edu).every(field => field)) &&
                       resumeData.experience.every(exp => Object.values(exp).every(field => field)) &&
                       Object.values(resumeData.contact).every(field => field);
    setIsFormComplete(isComplete);
  }, [resumeData]);

  const handleGenerateCV = async () => {
    const completeData = { ...resumeData, certificates: certificateList };

    try {
      const response = await fetch('http://localhost:5000/generate-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(completeData),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error('Failed to generate CV');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="text-xl space-y-10">
      <p className="font-bold text-2xl">Awards/Certifications</p>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>Title</div>
          <input
            className="basic-input"
            type="text"
            name="title"
            value={certificate.title}
            onChange={handleChange}
          />
        </div>
        <div className="w-full space-y-4">
          <div>Issuer</div>
          <input
            className="basic-input"
            type="text"
            name="issuer"
            value={certificate.issuer}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>Date</div>
          <input
            className="basic-input"
            type="date"
            name="date"
            value={certificate.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full space-y-4">
        <div>Description</div>
        <textarea
          className="basic-input"
          name="description"
          value={certificate.description}
          onChange={handleChange}
        />
      </div>
      <button className="btn-primary py-3 px-10" onClick={addCertificate}>
        Add Certificate
      </button>
      <div className="space-y-4">
        {certificateList.map((cert, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <p className="font-bold">{cert.title}</p>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
      <button
        className="btn-primary py-3 px-10"
        onClick={handleGenerateCV}
        disabled={!isFormComplete}
      >
        Generate CV
      </button>
    </div>
  );
};
