import React, { useState } from "react";
import "./index.css";

function CompanyDataForm({ onChange }) {
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companyCity: "",
    jobTitle: "",
    jobDescription: "",
  });

  // Define the list of form fields
  const formFields = [
    {
      label: "Company Name",
      name: "companyName",
      type: "text",
      placeholder: "Acme Inc.",
    },
    {
      label: "Company Address",
      name: "companyAddress",
      type: "text",
      placeholder: "123 Main St",
    },
    {
      label: "Company City, State, ZIP",
      name: "companyCity",
      type: "text",
      placeholder: "New York, NY 10001",
    },
    {
      label: "Job Title",
      name: "jobTitle",
      type: "text",
      placeholder: "Software Engineer",
    },
    {
      label: "Job Description",
      name: "jobDescription",
      type: "text",
      placeholder: "This is where you should put the job description",
    },
  ];

  return (
    <form className="max-w-md mx-auto">
      {formFields.map((field, index) => {
        if (field.label === "Job Description") {
          return null; // Skip rendering the input field for custom input field
        }

        return (
          <label key={field.name} className="block  py-1 mb-2">
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
        );
      })}
      <label className="block mb-2">
        <span className="text-gray-700">Job Description:</span>
        <textarea
          name="jobDescription"
          id="jobDescription"
          value={formData["jobDescription"]}
          placeholder="This is where you should put the job description"
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              ["jobDescription"]: e.target.value,
            }));
            onChange("jobDescription", e.target.value);
          }}
          className="h-64 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <br />
    </form>
  );
}

export default CompanyDataForm;
