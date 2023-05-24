import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./HomePage.js";
import ResultPage from "./ResultPage.js";
import NoPage from "./NoPage.js";
import ErrorPage from "./ErrorPage.js";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
