import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CopyButton from "../ui/CopyButton";

const ResultPage = () => {
  // retrieving data from location state
  const location = useLocation();
  const { letterData } = location.state;
  const lines = letterData.split("\n");

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold py-16 dark:text-white">Cover Letter</h1>
      <div
        className="lg:w-4/6 px-4 lg:p-16 border dark:border-gray-600 rounded-md shadow"
        id="document"
      >
        <div className="mt-4">
          {lines.map((line, index) => (
            <div className="dark:text-gray-200">
              <p key={index}>{line}</p>
              <div className="h-2">
                <br />
              </div>
            </div>
          ))}
        </div>
        <CopyButton letterData={letterData} />
      </div>
    </div>
  );
};

export default ResultPage;
