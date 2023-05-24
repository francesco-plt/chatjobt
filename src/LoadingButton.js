import React from "react";

const LoadingButton = ({ onClick, isLoading }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex flex-col justify-center items-center pb-8">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
      >
        {isLoading ? "Loading..." : "Generate Cover Letter"}
      </button>
      {isLoading && <div className="loading-spinner"></div>}
    </div>
  );
};

export default LoadingButton;
