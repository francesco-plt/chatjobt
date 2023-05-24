import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let { error } = location.state;

  if (!location.state) {
    navigate("/");
  }

  if (typeof error === "object") {
    error = JSON.stringify(error);
  }

  return (
    <div className="pb-4 pt-16 px-16 text-center flex flex-col items-center">
      <div>
        <p className="text-2xl font-bold py-2 pb-4 text-red-500">Error: </p>
      </div>
      <div>
        <pre class="bg-gray-100 p-4 px-8 rounded-md">
          <code class="text-sm font-mono whitespace-pre-wrap">
            <p>{error}</p>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ErrorPage;
