import React from "react";
import useForm from "./useForm";

const MyForm = () => {
  const { values, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
