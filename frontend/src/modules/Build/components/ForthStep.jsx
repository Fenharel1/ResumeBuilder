import { useContext } from "react";
import { ResumeContext } from "../context/resumeContext";
import { LuArrowLeft } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { ErrorHint } from "./ErrorHint";

export const FourthStep = () => {
  const { resume, setResume, setStep } = useContext(ResumeContext);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: resume.contact,
  });

  const onSubmit = (data) => {
    setResume({ ...resume, contact: data });
    setStep(4);
  };

  return (
    <div className="text-xl space-y-5">
      <p className="font-bold text-2xl">Contact Information</p>
      <form className="space-y-10 pb-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-10 w-full">
          <div className="w-full space-y-4">
            <div>Email</div>
            <input
              className="basic-input"
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            <ErrorHint error={errors.email}></ErrorHint>
          </div>
          <div className="w-full space-y-4">
            <div>Phone</div>
            <input
              className="basic-input"
              type="tel"
              id="phone"
              {...register("phone", { required: "Phone is required" })}
            />
            <ErrorHint error={errors.phone}></ErrorHint>
          </div>
        </div>
        <div className="w-full space-y-4">
          <div>
            LinkedIn Profile <span className="text-gray-400">(Optional)</span>
          </div>
          <input
            className="basic-input"
            type="url"
            id="linkedIn"
            {...register("linkedIn")}
          />
          <ErrorHint error={errors.linkedin}></ErrorHint>
        </div>

        <div className="absolute bottom-11 right-11 left-11">
          <button
            className="text-4xl float-left font-bold flex items-center"
            type="button"
            onClick={() => setStep(2)}
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
