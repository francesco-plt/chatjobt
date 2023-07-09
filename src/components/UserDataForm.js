import React, { useState } from "react";
import "./../index.css";

function UserDataForm({ onChange }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    city: "",
    phoneNumber: "",
    email: "",
    language: "English",
  });

  // Define the list of form fields
  const formFields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "John",
      required: true,
    },
    {
      label: "Surname",
      name: "surname",
      type: "text",
      placeholder: "Doe",
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "123 Main St",
      required: false,
    },
    {
      label: "City, State, ZIP",
      name: "city",
      type: "text",
      placeholder: "New York, NY 10001",
      required: false,
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "tel",
      placeholder: "555-555-5555",
      required: false,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
      required: false,
    },
    {
      label: "Language",
      name: "language",
      type: "text",
      placeholder: "English",
      required: true,
    },
  ];

  return (
    <form className="max-w-md mx-auto">
      {formFields.map((field) => (
        <label key={field.name} className="block mb-2 py-1">
          <span className="text-gray-700 dark:text-gray-200">
            {field.label}:
          </span>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            required={field.required}
            onChange={(e) => {
              setFormData((prevData) => ({
                ...prevData,
                [field.name]: e.target.value,
              }));
              onChange(field.name, e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-500"
          />
        </label>
      ))}
    </form>
  );
}

export default UserDataForm;
