import { useContext, useEffect } from "react";
import { ResumeContext } from "../context/resumeContext";
import { useForm } from "react-hook-form";
import { ErrorHint } from "./ErrorHint";

export const FirstStep = () => {
  const { resume, setResume, setStep } = useContext(ResumeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: resume });

  const onSubmit = (data) => {
    const { firstname, lastname, profession, address, city, state, zipcode } =
      data;
    setResume({
      ...resume,
      firstname,
      lastname,
      profession,
      address,
      city,
      state,
      zipcode,
    });
    setStep(1);
  };

  return (
    <form className="text-xl space-y-10" onSubmit={handleSubmit(onSubmit)}>
      <p className="font-bold text-2xl">Personal Information</p>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>First name</div>
          <input
            id="firstname"
            className="basic-input"
            type="text"
            {...register("firstname", { required: "Firstname is required" })}
          />
          <ErrorHint error={errors.firstname}></ErrorHint>
        </div>
        <div className="w-full space-y-4">
          <div>Last name</div>
          <input
            id="lastname"
            className="basic-input"
            type="text"
            {...register("lastname", { required: "Last name is required" })}
          />
          <ErrorHint error={errors.lastname}></ErrorHint>
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="w-full space-y-4">
          <div>Profession</div>
          <input
            id="profession"
            className="basic-input"
            type="text"
            {...register("profession", { required: "Profession is required" })}
          />
          <ErrorHint error={errors.profession}></ErrorHint>
        </div>
        <div className="w-full space-y-4">
          <div>Address</div>
          <input
            id="address"
            className="basic-input"
            type="text"
            {...register("address", { required: "Address is required" })}
          />
          <ErrorHint error={errors.address}></ErrorHint>
        </div>
      </div>
      <div className="flex gap-x-7">
        <div className="w-full space-y-4">
          <div>City</div>
          <input
            id="city"
            className="basic-input"
            type="text"
            {...register("city", { required: "city is required" })}
          />
          <ErrorHint error={errors.city}></ErrorHint>
        </div>
        <div className="w-full space-y-4">
          <div>State</div>
          <input
            id="state"
            className="basic-input"
            type="text"
            {...register("state", { required: "State is required" })}
          />
          <ErrorHint error={errors.state}></ErrorHint>
        </div>
        <div className="w-full space-y-4">
          <div>Zip Code</div>
          <input
            id="zipcode"
            className="basic-input"
            type="text"
            {...register("zipcode", { required: "Zip Code is required" })}
          />
          <ErrorHint error={errors.zipcode}></ErrorHint>
        </div>
      </div>

      <div className="absolute bottom-11 right-11">
        <button type="submit" className="btn-primary float-right py-3 px-10">
          Next step
        </button>
      </div>
    </form>
  );
};
