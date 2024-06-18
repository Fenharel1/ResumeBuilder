import { useState } from "react";

export const ThirdStep = () => {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [experienceList, setExperienceList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const addExperience = () => {
    setExperienceList([...experienceList, experience]);
    setExperience({ company: "", position: "", startDate: "", endDate: "", description: "" });
  };

  return (
    <div className="text-xl space-y-10">
      <p className="font-bold text-2xl">Work Experience</p>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>Company</div>
          <input
            className="basic-input"
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
          />
        </div>
        <div className="w-full space-y-4">
          <div>Position</div>
          <input
            className="basic-input"
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>Start Date</div>
          <input
            className="basic-input"
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="w-full space-y-4">
          <div>End Date</div>
          <input
            className="basic-input"
            type="date"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full space-y-4">
        <div>Description</div>
        <textarea
          className="basic-input"
          name="description"
          value={experience.description}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn-primary py-3 px-10"
        onClick={addExperience}
      >
        Add Experience
      </button>
      <div className="space-y-4">
        {experienceList.map((exp, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <p className="font-bold">{exp.company}</p>
            <p>{exp.position}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
