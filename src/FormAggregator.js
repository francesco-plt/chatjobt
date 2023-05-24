import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenAIForm from "./OpenAIForm";
import UserDataForm from "./UserDataForm";
import CompanyDataForm from "./CompanyDataForm";
import LoadingButton from "./LoadingButton";

function formatPayload(data) {
  return `
    You are a ${data.jobTitle} who is looking for a job.
    You found a job offering, but you need to apply for it.
    In order to do that, you need to write a cover letter, which should 
    explains why you are a good fit for the job, and why you want to work
    for the company.
    I will provide you with the information you need to write it, 
    and you will generate it:
    Name: ${data.name}
    Surname: ${data.surname}
    Home Address: ${data.address}
    Address City, State, ZIP: ${data.city}
    Email: ${data.email}
    Phone Number: ${data.phoneNumber}
    These are the details about the company you are applying to:
    Company Name: ${data.companyName}
    Company Address: ${data.companyAddress}
    Company City, State, ZIP: ${data.companyCity}
    This is the job title:
    ${data.jobTitle}
    And this is the job posting:
    ${data.jobDescription}
    Note that the cover letter should be written in ${data.language} language.
    ...
  `;
}

function FormAggregator() {
  const [formData, setFormData] = useState({});

  // for redirection after form submission
  const navigate = useNavigate();

  // submit button state
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (name, value) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // application logic: send the payload to the API
  const sendPayload = async () => {
    // check if all the fields are filled
    const requiredFields = [
      "apiKey",
      "model",
      "name",
      "surname",
      "address",
      "city",
      "phoneNumber",
      "email",
      "language",
      "companyName",
      "companyAddress",
      "companyCity",
      "jobTitle",
      "jobDescription",
    ];

    // default model
    if (!formData.model) {
      formData.model = "gpt-3.5-turbo";
    }
    // default language
    if (!formData.language) {
      formData.language = "English";
    }

    for (const field of requiredFields) {
      if (!formData[field]) {
        navigate("/error", { state: { error: `Missing field: ${field}` } });
        return;
      }
    }

    setIsLoading(true); // submit button state
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formData.apiKey}`,
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: formatPayload(formData) }],
        max_tokens: 150,
        temperature: 0.9,
        model: formData.model || "gpt-3.5-turbo",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error("API Error:", data.error);
          navigate("/error", { state: { error: data.error } });
          return;
        }

        console.log("API Response:", data);

        const currentDate = new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        });

        const coverLetter = `
            ${formData.name} ${formData.surname}
            ${formData.address}
            ${formData.city}
            ${formData.email}
            ${currentDate}
        
            ${formData.companyName}
            ${formData.companyAddress}
            ${formData.companyCity}
        
            ${data.choices[0].message.content}
        `;

        console.debug("API Response:", JSON.stringify(coverLetter, null, 2));
        navigate("/result", { state: { letterData: coverLetter } });
      })
      .catch((error) => {
        console.error("API Error:", error);
        navigate("/error", { state: { error } });
      });
  };

  return (
    <div>
      <div className="p-4">
        <OpenAIForm onChange={handleFormChange} />
        <div className="flex pt-4">
          <div className="p-4 w-1/2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-bold py-4">Personal Information</p>
              <UserDataForm onChange={handleFormChange} />
            </div>
          </div>
          <div className="p-4 w-1/2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-bold py-4">Company Information</p>
              <CompanyDataForm onChange={handleFormChange} />
            </div>
          </div>
        </div>
      </div>
      <LoadingButton onClick={sendPayload} isLoading={isLoading} />
    </div>
  );
}

export default FormAggregator;
