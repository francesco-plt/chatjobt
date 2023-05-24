import React from "react";

const Alert = ({ message, type, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50`}>
      <div className="bg-white rounded-lg p-8">
        <div className={`text-${type}-500 text-lg font-bold mb-4`}>
          {type.toUpperCase()}
        </div>
        <div className="text-gray-700">{message}</div>
        <button
          className={`bg-${type}-500 text-white rounded-lg px-4 py-2 mt-6 focus:outline-none`}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
