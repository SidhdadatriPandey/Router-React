import React, { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  address: string;
  password: string;
  collage: string;
  branch: string;
  onlineMode: boolean;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    address: "",
    password: "",
    collage: "",
    branch: "",
    onlineMode: false,
  });

  function handleChange(ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, type, value } = ev.target;

    if (type === "checkbox" || type === "radio") {
      const input = ev.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? input.checked : value,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Enter your Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="inp-taker"
        />
        <br />

        <label htmlFor="email">Enter your Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="inp-taker"
        />
        <br />

        <label htmlFor="address">Enter your Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="inp-taker"
        />
        <br />

        <label htmlFor="password">Set Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="inp-taker"
        />
        <br />

        <label htmlFor="collage">Select your Collage:</label>
        <select
          name="collage"
          value={formData.collage}
          onChange={handleChange}
          className="inp-taker"
        >
          <option value="">Select a collage</option>
          <option value="SIRT">SIRT</option>
          <option value="RGPV">RGPV</option>
          <option value="TIT">TIT</option>
          <option value="UIT">UIT</option>
        </select>
        <br />

        <label>Choose your Branch:</label>
        <div>
          <label htmlFor="branchCSE">
            CSE
            <input
              type="radio"
              id="branchCSE"
              name="branch"
              value="CSE"
              checked={formData.branch === "CSE"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="branchME">
            ME
            <input
              type="radio"
              id="branchME"
              name="branch"
              value="ME"
              checked={formData.branch === "ME"}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="branchIT">
            IT
            <input
              type="radio"
              id="branchIT"
              name="branch"
              value="IT"
              checked={formData.branch === "IT"}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />

        <label htmlFor="onlineMode">Choose your Study Mode:</label>
        <div>
          <label htmlFor="onlineMode">
            Online Mode
            <input
              type="checkbox"
              id="onlineMode"
              name="onlineMode"
              checked={formData.onlineMode}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
