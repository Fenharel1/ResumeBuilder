import { useState } from "react";

export const SecondStep = () => {
  const [education, setEducation] = useState({
    school: "",
    degree: "diploma",
    fieldOfStudy: "",
    graduationYear: ""
  });
  const [educationList, setEducationList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const addEducation = () => {
    setEducationList([...educationList, education]);
    setEducation({ school: "", degree: "diploma", fieldOfStudy: "", graduationYear: "" });
  };

  return (
    <div className="text-xl space-y-10">
      <p className="font-bold text-2xl">Education</p>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>School Name</div>
          <input
            className="basic-input"
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
          />
        </div>
        <div className="w-full space-y-4">
          <div>Degree</div>
          <select
            className="basic-input"
            name="degree"
            value={education.degree}
            onChange={handleChange}
          >
            <option value="diploma">Diploma</option>
            <option value="degree">Degree</option>
            <option value="masters">Master's</option>
            <option value="certificate">Certificate</option>
          </select>
        </div>
      </div>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>Field of Study</div>
          <input
            className="basic-input"
            type="text"
            name="fieldOfStudy"
            value={education.fieldOfStudy}
            onChange={handleChange}
          />
        </div>
        <div className="w-full space-y-4">
          <div>Graduation Year</div>
          <input
            className="basic-input"
            type="text"
            name="graduationYear"
            value={education.graduationYear}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        className="btn-primary py-3 px-10"
        onClick={addEducation}
      >
        Add Education
      </button>
      <div className="space-y-4">
        {educationList.map((edu, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <p className="font-bold">{edu.school}</p>
            <p>{edu.degree}</p>
            <p>{edu.fieldOfStudy}</p>
            <p>{edu.graduationYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
