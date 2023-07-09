import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CopyButton from "../ui/CopyButton";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { letterData } = location.state;
  const lines = letterData.split("\n");

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold py-16 dark:text-white">
        Generated Cover Letter:
      </h1>
      <div
        className="lg:w-4/6 px-4 lg:p-16 border dark:border-zinc-600 rounded-lg shadow-xl dark:shadow-2xl"
        id="document"
      >
        <div className="mt-4">
          {lines.map((line, index) => (
            <div className="dark:text-zinc-200">
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
