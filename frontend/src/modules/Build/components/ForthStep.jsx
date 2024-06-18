import { useState } from "react";

export const FourthStep = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    linkedin: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="text-xl space-y-10">
      <p className="font-bold text-2xl">Contact Information</p>
      <div className="flex gap-x-10 w-full">
        <div className="w-full space-y-4">
          <div>Email</div>
          <input
            className="basic-input"
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full space-y-4">
          <div>Phone</div>
          <input
            className="basic-input"
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full space-y-4">
        <div>LinkedIn Profile</div>
        <input
          className="basic-input"
          type="url"
          name="linkedin"
          value={contactInfo.linkedin}
          onChange={handleChange}
        />
      </div>
      <div className="w-full space-y-4">
        <div>Address</div>
        <input
          className="basic-input"
          type="text"
          name="address"
          value={contactInfo.address}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-x-10">
        <div className="w-full space-y-4">
          <div>City</div>
          <input
            className="basic-input"
            type="text"
            name="city"
            value={contactInfo.city}
            onChange={handleChange}
          />
        </div>
        <div className="w-full space-y-4">
          <div>State</div>
          <input
            className="basic-input"
            type="text"
            name="state"
            value={contactInfo.state}
            onChange={handleChange}
          />
        </div>
        <div className="w-full space-y-4">
          <div>Zip Code</div>
          <input
            className="basic-input"
            type="text"
            name="zipCode"
            value={contactInfo.zipCode}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
