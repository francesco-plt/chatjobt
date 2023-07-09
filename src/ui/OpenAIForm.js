import React, { useState } from "react";

const OpenAIForm = ({ onChange }) => {
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("GPT-3.5 Turbo");

  const modelOptions = [
    { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
    { value: "gpt-3.5-turbo-0301", label: "GPT-3.5 Turbo 0301" },
    { value: "gpt-4-32k-0314", label: "GPT-4 32k 0314" },
    { value: "gpt-4-32k-0315", label: "GPT-4 32k 0315" },
    { value: "gpt-4-0314", label: "GPT-4 0314" },
    { value: "gpt-4", label: "GPT-4" },
  ];

  return (
    <form className="max-w-md mx-auto flex">
      <div className="mb-4 w-1/2 px-4">
        <label
          className="block mb-2 text-gray-800 dark:text-gray-200"
          htmlFor="api-key"
        >
          API Key:
        </label>
        <input
          type="password"
          id="api-key"
          name="apiKey"
          placeholder="OpenAI API key"
          onChange={(e) => {
            setApiKey(e.target.value);
            onChange("apiKey", e.target.value);
          }}
          value={apiKey}
          className="w-full px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-500 dark:text-white"
        />
      </div>
      <div className="mb-4 w-1/2 px-4 ">
        <label
          className="block mb-2 text-gray-800 dark:text-gray-200"
          htmlFor="model"
        >
          Model:
        </label>
        <select
          id="model"
          name="selectedModel"
          value={model || "GPT-3.5 Turbo"}
          onChange={(e) => {
            setModel(e.target.value);
            onChange("model", e.target.value);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-500 dark:text-white"
        >
          <option value="">Select a model</option>
          {modelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <script></script>
    </form>
  );
};

export default OpenAIForm;
