import React, { useContext, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { LuArrowLeft } from "react-icons/lu";
import { useFieldArray, useForm } from "react-hook-form";
import { ErrorHint } from "./ErrorHint";
import { IoClose } from "react-icons/io5";

const educationItem = {
  school: "",
  graduationYear: "",
  degree: "",
  fieldOfStudy: "",
};

export const SecondStep = () => {
  const { setStep, setResume, resume } = useContext(ResumeContext);
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { education: resume.education || educationItem },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data) => {
    setResume({ ...resume, education: data.education });
    setStep(2);
  };

  const onRemoveEducation = (e, id) => {
    e.preventDefault();
    console.log(id, fields);
    remove(id);
  };

  const onAddEducation = () => {
    append({ ...educationItem });
  };

  return (
    <>
      <div>
        <div className="font-bold text-2xl float-left">Education</div>
        <button
          type="button"
          className="btn-primary py-3 px-10 float-right"
          onClick={() => onAddEducation()}
        >
          Add Education
        </button>
      </div>
      <form
        className="w-full space-y-5 max-h-[25rem] overflow-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((item, index) => (
          <div
            key={item.id}
            className="text-xl space-y-10 border px-10 pb-10 pt-8 rounded-xl relative"
          >
            <div className="flex gap-x-10 w-full">
              <div className="w-full space-y-4">
                <div>School Name</div>
                <input
                  id={`education[${index}].school`}
                  className="basic-input"
                  {...register(`education[${index}].school`, {
                    required: "School is required",
                  })}
                  defaultValue={item.school}
                />
                <ErrorHint error={errors?.education?.[index]?.school} />
              </div>
              <div className="w-full space-y-4">
                <div>Degree</div>
                <select
                  id={`education[${index}].degree`}
                  className="basic-input"
                  {...register(`education[${index}].degree`, {
                    required: "Degree is required",
                  })}
                  defaultValue={item.degree}
                >
                  <option value="diploma">Diploma</option>
                  <option value="degree">Degree</option>
                  <option value="masters">{"Master's"}</option>
                  <option value="certificate">Certificate</option>
                </select>
                <ErrorHint error={errors?.education?.[index]?.degree} />
              </div>
            </div>
            <div className="flex gap-x-10 w-full">
              <div className="w-full space-y-4">
                <div>Field of Study</div>
                <input
                  className="basic-input"
                  type="text"
                  id={`education[${index}].fieldOfStudy`}
                  {...register(`education[${index}].fieldOfStudy`, {
                    required: "Required",
                  })}
                  defaultValue={item.fieldOfStudy}
                />
                <ErrorHint error={errors?.education?.[index]?.fieldOfStudy} />
              </div>
              <div className="w-full space-y-4">
                <div>Graduation Year</div>
                <input
                  className="basic-input"
                  id={`education[${index}].graduationYear`}
                  {...register(`education[${index}].graduationYear`, {
                    required: "Date is required",
                  })}
                  defaultValue={item.graduationYear}
                />
                <ErrorHint error={errors?.education?.[index]?.graduationYear} />
              </div>
            </div>

            <button
              className="font-bold text-3xl absolute -top-8 right-8"
              onClick={(e) => onRemoveEducation(e, item.id)}
            >
              <IoClose></IoClose>
            </button>
          </div>
        ))}

        <div className="absolute bottom-11 right-11 left-11">
          <button
            className="text-4xl float-left font-bold flex items-center"
            onClick={() => setStep(0)}
          >
            <LuArrowLeft />
          </button>
          <button type="submit" className="btn-primary float-right py-3 px-10">
            Next step
          </button>
        </div>
      </form>
    </>
  );
};
