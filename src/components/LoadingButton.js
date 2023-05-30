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
        className="bg-green-400 hover:bg-green-500 text-white dark:text-gray-800 font-bold py-3 px-4 rounded-lg shadow-md"
      >
        {isLoading ? "Loading..." : "Generate Cover Letter"}
      </button>
      {isLoading && <div className="loading-spinner"></div>}
    </div>
  );
};

export default LoadingButton;
