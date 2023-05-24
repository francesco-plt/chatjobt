import React, { useState } from "react";
import "./index.css";

function UserDataForm({ onChange }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    city: "",
    phoneNumber: "",
    email: "",
    language: "",
  });

  // Define the list of form fields
  const formFields = [
    { label: "Name", name: "name", type: "text", placeholder: "John" },
    { label: "Surname", name: "surname", type: "text", placeholder: "Doe" },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "123 Main St",
    },
    {
      label: "City, State, ZIP",
      name: "city",
      type: "text",
      placeholder: "New York, NY 10001",
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "tel",
      placeholder: "555-555-5555",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
    },
    {
      label: "Language",
      name: "language",
      type: "text",
      placeholder: "English",
    },
  ];

  return (
    <form className="max-w-md mx-auto">
      {formFields.map((field) => (
        <label key={field.name} className="block mb-2 py-1">
          <span className="text-gray-700">{field.label}:</span>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                [field.name]: e.target.value,
              }));
              onChange(field.name, e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      ))}
    </form>
  );
}

export default UserDataForm;
