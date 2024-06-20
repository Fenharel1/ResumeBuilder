import { useContext, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { LuArrowLeft } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { ErrorHint } from "./ErrorHint";

export const SecondStep = () => {
  const { resume, setResume, setStep } = useContext(ResumeContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [education, setEducation] = useState({
    school: "",
    degree: "diploma",
    fieldOfStudy: "",
    graduationYear: "",
  });
  const [educationList, setEducationList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const addEducation = () => {
    setEducationList([...educationList, education]);
    setEducation({
      school: "",
      degree: "diploma",
      fieldOfStudy: "",
      graduationYear: "",
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="text-xl space-y-10 pb-24"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="font-bold text-2xl">Education</p>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>School Name</div>
          <input
            id="school"
            className="basic-input"
            onChange={handleChange}
            {...register("school", { required: "School is required" })}
          />
          <ErrorHint error={errors.school}></ErrorHint>
        </div>
        <div className="w-full space-y-4">
          <div>Degree</div>
          <select
            id="degree"
            className="basic-input"
            onChange={handleChange}
            {...register("degree", { required: "Degree is required" })}
          >
            <option value="diploma">Diploma</option>
            <option value="degree">Degree</option>
            <option value="masters">{"Master's"}</option>
            <option value="certificate">Certificate</option>
          </select>
          <ErrorHint error={errors.degree}></ErrorHint>
        </div>
      </div>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>Field of Study</div>
          <input
            className="basic-input"
            type="text"
            id="fieldOfStudy"
            {...register("fieldOfStudy", { required: "Required" })}
          />
          <ErrorHint error={errors.fieldOfStudy}></ErrorHint>
        </div>
        <div className="w-full space-y-4">
          <div>Graduation Year</div>
          <input
            className="basic-input"
            id="graduationYear"
            {...register("graduationYear", { required: "Date is required" })}
          />
          <ErrorHint error={errors.graduationYear}></ErrorHint>
        </div>
      </div>
      <button
        type="button"
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
      <div className="absolute bottom-11 right-11 left-11">
        <button
          className="text-4xl float-left font-bold flex items-center"
          onClick={(e) => setStep(0)}
        >
          <LuArrowLeft />
        </button>
        <button type="submit" className="btn-primary float-right py-3 px-10">
          Next step
        </button>
      </div>
    </form>
  );
};
