export const FirstStep = () => {
  return (
    <div className="text-xl space-y-10">
      <p className="font-bold text-2xl">Personal Information</p>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>First name</div>
          <input className="basic-input" type="text" />
        </div>
        <div className="w-full space-y-4">
          <div>Last name</div>
          <input className="basic-input" type="text" />
        </div>
      </div>
      <div className="flex gap-x-10">
        <div className="w-full space-y-4">
          <div>Profession</div>
          <input className="basic-input" type="text" />
        </div>
        <div className="w-full space-y-4">
          <div>Address</div>
          <input className="basic-input" type="text" />
        </div>
      </div>
      <div className="flex gap-x-7">
        <div className="w-full space-y-4">
          <div>City</div>
          <input className="basic-input" type="text" />
        </div>
        <div className="w-full space-y-4">
          <div>State</div>
          <input className="basic-input" type="text" />
        </div>
        <div className="w-full space-y-4">
          <div>Zip Code</div>
          <input className="basic-input" type="text" />
        </div>
      </div>
    </div>
  );
};
