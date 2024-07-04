import { useState, useContext } from "react";
import { ResumeContext } from "../../context/resumeContext";
import { generatePDF } from "../../../../tools/generatePDF"; // Adjust the path as necessary

export const FifthStep = () => {
  const [certificate, setCertificate] = useState({
    title: "",
    issuer: "",
    date: "",
    description: "",
  });
  const [certificateList, setCertificateList] = useState([]);
  const { resumeData, setStep } = useContext(ResumeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate((prev) => ({ ...prev, [name]: value }));
  };

  const addCertificate = () => {
    setCertificateList([...certificateList, certificate]);
    setCertificate({ title: "", issuer: "", date: "", description: "" });
  };

  const handleGenerateCV = () => {
    const completeData = { ...resumeData, certificates: certificateList };
    generatePDF(completeData);
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
      <button
        className="btn-primary py-3 px-10"
        onClick={addCertificate}
      >
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
        disabled={'Please Enter Information on the empty Fields'}
      >
        Generate CV
      </button>
    </div>
  );
};
