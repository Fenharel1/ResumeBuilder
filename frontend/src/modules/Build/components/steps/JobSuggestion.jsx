// JobSuggestion.jsx
import { useContext, useState } from "react";
import { ResumeContext } from "../../context/resumeContext";
import { LuArrowLeft } from "react-icons/lu";
import { useForm } from "react-hook-form";
import axios from 'axios';

export const JobSuggestion = () => {
  const { resume, setStep } = useContext(ResumeContext);
  const [suggestions, setSuggestions] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: resume.experience,
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/analyze-job', {  // Update the URL here
        jobTitle: data.jobTitle,
        industry: data.industry,
        jobDescription: data.jobDescription,
      });
      setSuggestions(response.data.analysis);
    } catch (error) {
      console.error("Error analyzing job: ", error);
    }
  };

  return (
    <div className="text-xl space-y-5">
      <p className="font-bold text-2xl">Job Suggestions</p>
      <form className="space-y-10 pb-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full space-y-4">
          <div className="w-full space-y-4">
            <div>Job Title</div>
            <input
              className="basic-input"
              type="text"
              id="jobTitle"
              {...register("jobTitle", { required: "Job Title is required" })}
            />
            {errors.jobTitle && <span>{errors.jobTitle.message}</span>}
          </div>
          <div className="w-full space-y-4">
            <div>Industry</div>
            <input
              className="basic-input"
              type="text"
              id="industry"
              {...register("industry", { required: "Industry is required" })}
            />
            {errors.industry && <span>{errors.industry.message}</span>}
          </div>
          <div className="w-full space-y-4">
            <div>Job Description</div>
            <textarea
              className="basic-input"
              id="jobDescription"
              {...register("jobDescription", { required: "Job Description is required" })}
            />
            {errors.jobDescription && <span>{errors.jobDescription.message}</span>}
          </div>
        </div>
        <div className="absolute bottom-11 right-11 left-11">
          <button
            className="text-4xl float-left font-bold flex items-center"
            type="button"
            onClick={() => setStep(4)}
          >
            <LuArrowLeft />
          </button>
          <button type="submit" className="btn-primary float-right py-3 px-10">
            Get Suggestions
          </button>
        </div>
      </form>
      {suggestions.length > 0 && (
        <div className="mt-10">
          <h3 className="font-bold text-xl">Suggested Jobs:</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
