import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OpenAIForm from "../ui/OpenAIForm";
import UserDataForm from "../ui/UserDataForm";
import CompanyDataForm from "../ui/CompanyDataForm";
import LoadingButton from "../ui/LoadingButton";
import ErrorMessage from "../ui/ErrorMessage";
import "./../index.css";

function generatePrompt(data) {
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

function HomePage() {
  const navigate = useNavigate(); // redirection after form submission

  const [isLoading, setIsLoading] = useState(false); // submit button state
  const [errors, setErrors] = useState([]); // Errors state variable

  const handleErrors = (errorMessages) => {
    // max 5 errors
    setErrors((prevErrors) => [...prevErrors, ...errorMessages].slice(-5));
  };

  const handleCloseError = (index) => {
    setErrors((prevErrors) => {
      const newErrors = [...prevErrors];
      newErrors.splice(index, 1);
      return newErrors;
    });
  };

  // close error popups after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        // handleCloseError(errors.length - 1);
        setErrors([]);
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errors]);

  const [formData, setFormData] = useState({}); // form data state
  const handleFormChange = (name, value) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // application logic: contacting OpenAI APIs
  const callApi = async () => {
    /* OpenAI API parameters */
    const chatApiUrl = "https://api.openai.com/v1/chat/completions";

    const requiredFields = [
      "apiKey",
      "model",
      "name",
      "surname",
      "language",
      "jobTitle",
      "jobDescription",
    ];

    if (!formData.language) {
      formData.language = "English";
    }

    for (const field of requiredFields) {
      if (!formData[field]) {
        handleErrors([`${field} is required`]);
      }
    }

    setIsLoading(true); // submit button state

    fetch(chatApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${formData.apiKey}`,
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: generatePrompt(formData) }],
        model: formData.model || "gpt-3.5-turbo",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // debug
        console.log("errors", errors);

        if (data.error) {
          setIsLoading(false); // submit button state
          console.error("API Error:", data.error);
          handleErrors([data.error.message]);
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
        setIsLoading(false); // submit button state
        console.error("API Error:", error);
        handleErrors([error.message]);
      });
  };

  return (
    <div className="flex flex-col min-h-screen px-4">
      {errors.length > 0 && (
        <div className="fixed bottom-0 right-0 m-4 flex flex-col w-1/3">
          {errors.map((error, index) => (
            <ErrorMessage
              key={index}
              error={error}
              onClose={() => handleCloseError(index)}
            />
          ))}
        </div>
      )}
      <div className="p-4 pt-16 flex flex-col items-center text-center px-16">
        <div>
          <p className="font-bold text-lg py-4 dark:text-white">
            Privacy Notice:
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <p className="lg:px-16 lg:w-4/6 dark:text-white">
            Everything is processed locally in your browser. No data is sent to
            any server, except for the OpenAI API call which is sent directly to
            OpenAI for processing by them. The source of this website is
            published{" "}
            <a
              href="https://github.com/francesco-plt/chatjobt/"
              className="text-blue-500"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className="p-4 pt-16">
        <OpenAIForm onChange={handleFormChange} />
        <div className="flex items-start pt-4">
          <div className="p-4 w-1/2 flex flex-col justify-center items-center">
            <p className="text-2xl font-bold py-4 dark:text-white">
              Personal Informations
            </p>
            <UserDataForm onChange={handleFormChange} />
          </div>
          <div className="p-4 w-1/2 flex flex-col justify-center items-center">
            <p className="text-2xl font-bold py-4 dark:text-white">
              Company Informations
            </p>
            <CompanyDataForm onChange={handleFormChange} />
          </div>
        </div>
        <LoadingButton onClick={callApi} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default HomePage;
