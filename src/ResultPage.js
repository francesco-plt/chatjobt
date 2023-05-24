import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ResultPage = () => {
  const location = useLocation();
  const { letterData } = location.state;
  const lines = letterData.split("\n");

  // copy button
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center w-4/6">
        <div className="p-8"></div>
        <div
          className="flex flex-col justify-center items-center"
          id="document"
        >
          <h1 className="text-4xl font-bold py-16">Cover Letter</h1>
          <div className="bg-white p-16 border rounded-lg">
            <div className="mt-4">
              {lines.map((line, index) => (
                <div>
                  <p key={index}>{line}</p>
                  <br />
                </div>
              ))}
            </div>
            <div className="py-4">
              <CopyToClipboard text={letterData}>
                <button
                  className="px-4 py-2 bg-slate-200 text-black rounded-md"
                  onClick={handleCopyClick}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
