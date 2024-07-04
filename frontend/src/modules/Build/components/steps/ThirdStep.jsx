import { useContext, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { ResumeContext } from "../../context/resumeContext";
import { IoClose } from "react-icons/io5";
import { ErrorHint } from "../stracture/ErrorHint";
import { LuArrowLeft } from "react-icons/lu";

const experienceItem = {
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  description: "",
};

export const ThirdStep = () => {
  const { resume, setResume, setStep } = useContext(ResumeContext);
  const {
    formState: { errors },
    register,
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      experience: resume.experience || experienceItem,
    },
  });
  const { append, remove, fields } = useFieldArray({
    control,
    name: "experience",
  });

  const onSubmit = (data) => {
    setResume({ ...resume, experience: data.experience });
    setStep(3);
  };

  return (
    <div className="text-xl space-y-10">
      <div className="font-bold text-2xl">
        Work Experience
        <button
          className="btn-primary float-right px-4 py-2 text-lg"
          onClick={() => append(experienceItem)}
        >
          Add Experience
        </button>
      </div>
      <form
        className="w-full space-y-5 max-h-[25rem] overflow-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((item, idx) => (
          <div
            className="relative space-y-5 border rounded-xl p-8 "
            key={item.id}
          >
            <div className="flex gap-x-10 w-full">
              <div className="w-full space-y-4">
                <div>Company</div>
                <input
                  className="basic-input"
                  type="text"
                  id={`experience[${idx}].company`}
                  {...register(`experience[${idx}].company`, {
                    required: "Company is required",
                  })}
                />
                <ErrorHint
                  error={errors?.experience?.[idx]?.company}
                ></ErrorHint>
              </div>
              <div className="w-full space-y-4">
                <div>Position</div>
                <input
                  className="basic-input"
                  type="text"
                  id={`experience[${idx}].position`}
                  {...register(`experience[${idx}].position`, {
                    required: "Posititon is required",
                  })}
                />
                <ErrorHint
                  error={errors?.experience?.[idx]?.position}
                ></ErrorHint>
              </div>
            </div>
            <div className="flex gap-x-10 w-full">
              <div className="w-full space-y-4">
                <div>Start Date</div>
                <input
                  className="basic-input"
                  type="date"
                  id={`experience[${idx}].startDate`}
                  {...register(`experience[${idx}].startDate`, {
                    required: "Start date is required",
                  })}
                />
                <ErrorHint
                  error={errors?.experience?.[idx]?.startDate}
                ></ErrorHint>
              </div>
              <div className="w-full space-y-4">
                <div>End Date</div>
                <input
                  className="basic-input"
                  type="date"
                  id={`experience[${idx}].endDate`}
                  {...register(`experience[${idx}].endDate`, {
                    required: "End date is required",
                  })}
                />
                <ErrorHint
                  error={errors?.experience?.[idx]?.endDate}
                ></ErrorHint>
              </div>
            </div>
            <div className="w-full space-y-4">
              <div>Description</div>
              <textarea
                className="basic-input"
                id={`experience[${idx}].description`}
                {...register(`experience[${idx}].description`, {
                  required: "Enter a detailed description",
                })}
              />
              <ErrorHint
                error={errors?.experience?.[idx]?.description}
              ></ErrorHint>
            </div>
            <div
              onClick={() => remove(item.id)}
              className="absolute top-0 right-8 text-3xl font-medium hover:text-primary"
            >
              <IoClose />
            </div>
          </div>
        ))}
        <div className="absolute bottom-11 right-11 left-11">
          <button
            className="text-4xl float-left font-bold flex items-center"
            type="button"
            onClick={() => setStep(1)}
          >
            <LuArrowLeft />
          </button>
          <button type="submit" className="btn-primary float-right py-3 px-10">
            Next step
          </button>
        </div>
      </form>
    </div>
  );
};
