import React from "react";
import Header from "./Header.js";
import FormAggregator from "./FormAggregator.js";
import "./index.css";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen px-4">
      <div className="p-4 pt-16 flex flex-col items-center text-center px-16">
        <div>
          <p className="text-2xl font-bold py-4">Privacy Notice:</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <p className="px-16 w-4/6">
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
        <FormAggregator />
      </div>
    </div>
  );
}

export default HomePage;
