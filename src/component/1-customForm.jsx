import React, { useState } from "react";

const CustomForm = () => {
  const [formData, setFormData] = useState({});
  const [isFormData, setIsFormData] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormData(true);
  };

  return (
    <div>
      <h2>Form Handling</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={divStyle}>
          <label>First Name:</label>
          <input onChange={handleChange} name="firstName" type="text" />
        </div>
        <div style={divStyle}>
          <label>Last Name:</label>
          <input onChange={handleChange} name="lastName" type="text" />
        </div>
        <div style={divStyle}>
          <label>Email:</label>
          <input onChange={handleChange} name="email" type="email" />
        </div>
        <div style={divStyle}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <p>First Name: {isFormData && formData?.firstName}</p>
        <p>Last Name: {isFormData && formData?.lastName}</p>
        <p>Email: {isFormData && formData?.email}</p>
      </div>
    </div>
  );
};

export default CustomForm;

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  margin: "0 auto",
};
const divStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "12px",
};
